import React, { useState, useEffect } from "react";
import axios from "axios";

const ActivityComponent = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState(null);
  const [getActivity, setActivity] = useState(null);
  const activityData = async () => {
    try {
      const response = await axios.get("http://localhost:2024/activity", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //console.log(response.data.data);
      setActivity(response.data.data.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2024/users/${localStorage.getItem("id")}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const userData = response.data.data;
      setData(userData);
      if (userData.profileUrl.includes("/uploads/")) {
        userData.profileUrl = `http://localhost:2024${userData.profileUrl}`;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    activityData();
  }, [getActivity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", "profile");
  }, []);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-py-5 tw-bg-[#FFF6D9] tw-font-poppins">
        <div className="tw-flex tw-pt-44 tw-justify-between tw-mx-36 tw-pb-3">
          <p className="tw-text-[35px] tw-pb-6">Aktivitas</p>
          <div className="tw-flex tw-flex-col tw-gap-6">
            <div className="tw-flex tw-size-[200px] tw-rounded-full tw-mx-auto">
              <img
                src={previewUrl || (data && data.profileUrl)}
                className="tw-size-[200px] tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] tw-rounded-full tw-object-cover 
                            tw-object-center tw-mx-auto"
                alt="profile"
              />
            </div>
            <p className="tw-mx-auto tw-text-[35px] tw-pb-6 tw-text-center">
              {data && data.firstName + " " + data.lastName}
            </p>
          </div>
          <p className="tw-text-[35px] tw-pb-6 tw-opacity-0">Aktivitas</p>
        </div>
        <hr className="tw-border-2 tw-border-[#000000]"></hr>
        {getActivity && (
          <table className="tw-w-full table-fixed tw-mx-auto tw-mb-2 tw-font-poppins">
            <thead>
              <tr>
                <td className="tw-text-center tw-text-[18px] tw-py-8">
                  Aktivitas
                </td>
                <td className="tw-text-center tw-text-[18px] tw-py-8">
                  Tanggal
                </td>
                <td className="tw-text-center tw-text-[18px] tw-py-8">Nilai</td>
                <td className="tw-text-center tw-text-[18px] tw-py-8">
                  Status
                </td>
              </tr>
            </thead>
            <tbody>
              {getActivity.map((a, index) => {
                return (
                  <tr key={a.id}>
                    <td className="tw-text-center tw-text-[18px] tw-pb-5">
                      {a.activityName}
                    </td>
                    <td className="tw-text-center tw-text-[18px] tw-pb-5">
                      {a.date}
                    </td>
                    <td className="tw-text-center tw-text-[18px] tw-pb-5">
                      {a.value}
                    </td>
                    {a.status.toLowerCase() === "lulus" ? (
                      <td className="tw-flex tw-text-center tw tw-text-[18px] tw-pb-5 tw-justify-center">
                        <p className="tw-border-[3px] tw-text-[#34D399] tw-border-[#34D399] tw-bg-[#ECFDF5] tw-w-fit tw-rounded-[10px] tw-py-0.5 tw-px-3">
                          {a.status}
                        </p>
                      </td>
                    ) : (
                      <td className="tw-flex tw-text-center tw tw-text-[18px] tw-pb-5 tw-justify-center">
                        <div className="tw-border-[3px] tw-text-[#FB7185] tw-border-[#FB7185] tw-bg-[#FFF1F2] tw-w-fit tw-rounded-[10px] tw-py-0.5 tw-px-3">
                          {a.status}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ActivityComponent;
