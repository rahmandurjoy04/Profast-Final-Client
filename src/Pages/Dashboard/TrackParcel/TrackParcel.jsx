import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const TrackParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [parcels, setParcels] = useState([]);
  const [trackingData, setTrackingData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrackingId, setSelectedTrackingId] = useState("");

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const res = await axiosSecure.get(`/parcels?email=${user.email}`);
        setParcels(res.data);
      } catch (err) {
        console.error("Failed to load user parcels:", err);
      }
    };
    fetchParcels();
  }, [user.email, axiosSecure]);

  const handleTrackClick = async (trackingId) => {
    try {
      const res = await axios.get(`https://pro-fast-server-steel.vercel.app/trackings/${trackingId}`);
      setTrackingData(res.data);
      setSelectedTrackingId(trackingId);
      setModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch tracking data:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Parcels</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Tracking ID</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, idx) => (
              <tr key={parcel._id} className="text-center">
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border font-mono">{parcel.tracking_id}</td>
                <td className="p-2 border capitalize">{parcel.delivery_status}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleTrackClick(parcel.tracking_id)}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Tracking: {selectedTrackingId}
            </h2>

            <div className="relative border-l-2 border-gray-300 ml-6">
              {trackingData.map((step) => (
                <div key={step._id} className="mb-10 ml-4 relative">
                  <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                  <div className="pl-6">
                    <h3 className="text-lg font-semibold capitalize text-blue-700">
                      {step.status.replace(/_/g, " ")}
                    </h3>
                    <p className="text-sm text-gray-600">{step.details}</p>
                    <p className="text-xs text-gray-400 italic">
                      Updated by: {step.updated_by}
                    </p>
                    <time className="text-xs text-gray-500 block mt-1">
                      {format(new Date(step.timestamp), "PPpp")}
                    </time>
                  </div>
                </div>
              ))}
              {trackingData.length === 0 && (
                <p className="text-gray-500 text-center mt-6">No tracking updates found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
