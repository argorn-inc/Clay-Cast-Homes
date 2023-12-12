import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./data";
import DeltaState from "../About/deltastate-property";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const serviceId = parseInt(id, 10);
  const service = Data.find((item) => item.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return <DeltaState service={service} />;
}

export default Services;
