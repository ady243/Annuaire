/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "./AppContext";

const tableau = (props) => {
  const { entries } = useContext(AppContext);

  return (
    <table className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <Link href="/" passHref>
        <a>
          <button type="button" className="btn btn-primary">
            ADD ENTRY
          </button>
        </a>
      </Link>
      <thead>
        <tr className="border-b-2 font-bold">
          <th className="p-2 border-r">INFORMATION</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot className="border-t-2">
        <tr>
          <tr className="border-r">
            <th>
              <div className="flex justify-between p-2">
                <span className="font-bold">NAME :</span>
                <span></span>
              </div>
            </th>
          </tr>
          <tr className="border-r">
            <th>
              <div className="flex justify-between p-2">
                <span className="font-bold">AGE :</span>
                <span></span>
              </div>
            </th>
          </tr>
        </tr>
        <tr className="border-t-2">
          <th colSpan={2}>
            <div className="flex justify-between p-2">
              <span className="font-bold">ZIP CODE :</span>
              <span></span>
            </div>
          </th>
        </tr>
        <tr className="border-t-2">
          <th colSpan={2}>
            <div className="flex justify-between p-2">
              <span className="font-bold">COUNTRY : {}</span>
              <span></span>
            </div>
          </th>
        </tr>
      </tfoot>
      {/* <tbody>
        {entries.map(({ Name, Age, Country, Zip }, data))}
        <th>{Name}</th>
        <th>{Country}</th>
        <th>{Zip}</th>
        <th>{Age}</th>
      </tbody> */}
    </table>
  );
};

export default tableau;
