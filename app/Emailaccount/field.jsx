"use client"
import React, { useState } from 'react';

const EmailAccounts = () => {
  const [emailAccounts, setEmailAccounts] = useState([
    { provider: 'Gmail', email: 'panel@quomeda.com', verified: true },
    { provider: 'Gmail', email: 'info@quomeda.com', verified: true },
  ]);

  const addEmailAccount = () => {
    setEmailAccounts([...emailAccounts, { provider: 'Gmail', email: '', verified: false }]);
  };

  const handleVerificationChange = (index) => {
    const updatedEmailAccounts = [...emailAccounts];
    updatedEmailAccounts[index].verified = !updatedEmailAccounts[index].verified;
    setEmailAccounts(updatedEmailAccounts);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl border-b -mt-2 font-bold mb-4">Email Accounts</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-[#E9EBF0] text-[#656F7D]">
            <th className="py-2">Provider</th>
            <th className="px- py-2">Email Address</th>
            <th className="px- py-2">Verified</th>
            <th className="px- py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {emailAccounts.map((account, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{account.provider}</td>
              <td className="border px-4 py-2">{account.email}</td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={account.verified}
                  onChange={() => handleVerificationChange(index)}
                />
              </td>
              <td className="border px-4 py-2">
                <img src="/trash.png" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addEmailAccount}
        className="bg-white hover:bg-indigo-500 border-indigo-600 border-2  text-black font-bold py-2 px-4 rounded mt-4"
      >
        + Add Account
      </button>
    </div>
  );
};

export default EmailAccounts;
