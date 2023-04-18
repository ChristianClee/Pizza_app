import React, { useState } from "react";

export default function useFetching(callback) {
  const [error, setError] = useState(null)
  const [isLoad, setIsLoad] = useState(false)
  async function processing(url) {
    try { 
      setIsLoad(true)
      await callback(url)
    }
    catch (err) {
      setError(err.message)
     }
    finally {
      setIsLoad(false);
    }
  }
  return {
    error: error,
    isLoad: isLoad,
    processing: processing,
  };
}