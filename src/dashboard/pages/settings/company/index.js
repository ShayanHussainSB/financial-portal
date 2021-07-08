/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast from 'react-hot-toast';
import InputMask from "react-input-mask";
import ReactTooltip from "react-tooltip";
import $ from "jquery";

function Company() {
  const [company, setcompany] = new useState([]);
  const toastFields = { duration: 6000, position: 'top-center' };
  useEffect(() => {
    axios
      .get("http://localhost:4000/companies/" + localStorage.getItem("company_id"))
      .then((res) => setcompany([res.data]))
      .catch((err) => console.log("Error: " + err));
  }, []);
  const onChange = (e) => {
    setcompany([
      {
        ...company[0],
        [e.target.name]: e.target.value,
      },
    ]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/companies/" + localStorage.getItem("company_id"),
        company[0]
      )
      .then((res) => {
        res.data === "Updated"
          ? toast.success(`Company Info Updated`, toastFields)
          : toast.error("Please Contact Us", toastFields)
      })
      .catch((err) => { toast.dismiss(); toast.error("Server Error", toastFields) });
  };
  return (
    <>
      <div className="card-header">
        <h4 className="card-title text-primary">Company Settings</h4>
      </div>
      <div className="card-body">
        {company.map((element, index) => {
          return (
            <div className="settings-form">
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Microsoft ...."
                      className="form-control"
                      defaultValue={element.name}
                      name="name"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="company@example.com"
                      defaultValue={element.email}
                      name="email"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Type</label>
                    <Select
                      id="inputState"
                      onChange={onChange}
                      defaultValue={{
                        value: element.type,
                        label: element.type,
                      }}
                      options={[
                        {
                          value: "Sole Trader",
                          label: "Sole Trader",
                          target: { name: "type", value: "Sole Trader" },
                        },
                        {
                          value: "Patnership",
                          label: "Patnership",
                          target: { name: "type", value: "Patnership" },
                        },
                        {
                          value: "Private Limited Company",
                          label: "Private Limited Company",
                          target: {
                            name: "type",
                            value: "Private Limited Company",
                          },
                        },
                        {
                          value: "Traded company or co-operative",
                          label: "Traded company or co-operative",
                          target: {
                            name: "type",
                            value: "Traded company or co-operative",
                          },
                        },
                        {
                          value: "Charity & Assossiation",
                          label: "Charity & Assossiation",
                          target: {
                            name: "type",
                            value: "Charity & Assossiation",
                          },
                        },
                        {
                          value: "Company",
                          label: "Company",
                          target: { name: "type", value: "Company" },
                        },
                        {
                          value: "Something Else",
                          label: "Something Else",
                          target: { name: "type", value: "Something Else" },
                        },
                      ]}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>Phone</label>
                    <InputMask
                      mask="+(99) 99999999-99"
                      maskChar=" "
                      placeholder="+(xx) xxxxxx-xxx"
                      defaultValue={element.phone}
                      onChange={onChange}
                      name="phone"
                      className="form-control"
                    />
                  </div>
                  <ReactTooltip id="invoiceTip" place="top" effect="solid">
                    Customize InvoiceFormat
                  </ReactTooltip>
                  <div className="form-group col-md-3">
                    <label>Invoice Format</label>
                    <div className="input-group">
                      <div
                        className="input-group-prepend"
                        data-tip
                        data-for="invoiceTip"
                      >
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            name="FormatDetails"
                            id="FormatDetails"
                            checked={element.FormatDetails ? "checked" : ""}
                            onChange={(e) => {
                              setcompany([
                                {
                                  ...company[0],
                                  [e.target.name]: $("#FormatDetails").is(
                                    ":checked"
                                  ),
                                },
                              ]);
                              $("#FormatDetails").is(":checked")
                                ? $(".invoiceFormat").html("mmyy-1")
                                : $(".invoiceFormat").html("1");
                            }}
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="INV-"
                        name="invoiceFormat"
                        defaultValue={element.invoiceFormat}
                        onChange={onChange}
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text invoiceFormat">1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label>NTN</label>
                    <InputMask
                      mask="9999999-9"
                      maskChar=" "
                      defaultValue={element.ntn}
                      name="ntn"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>STRN</label>
                    <InputMask
                      mask="9999999999999"
                      maskChar=" "
                      defaultValue={element.strn}
                      name="strn"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label>PSTR</label>
                    <InputMask
                      mask="9999999999-aa"
                      maskChar=" "
                      defaultValue={element.pstrn}
                      name="pstrn"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Notes</label>
                  <input
                    type="text"
                    placeholder="Notes"
                    defaultValue={element.notes}
                    name="notes"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    placeholder="1234 Main St"
                    className="form-control"
                    name="address"
                    defaultValue={element.address}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Tagline</label>
                  <textarea
                    placeholder="e.g 'Our business is to understand your business.'"
                    className="form-control"
                    name="tagLine"
                    defaultValue={element.tagLine}
                    onChange={onChange}
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button className="customBtn third pulse" type="submit">
                    Modify Information
                  </button>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Company;
