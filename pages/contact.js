import React from "react";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="text-center py-3">Contact with Rajan</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Your messege</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Messege
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
