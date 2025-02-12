// app/admin/settings/page.tsx
"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("My E-commerce");
  const [currency, setCurrency] = useState("USD");
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Store Name</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="KES">KES (Ksh)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
            <span className="text-gray-700">Enable Email Notifications</span>
          </label>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
