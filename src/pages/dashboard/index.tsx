import Layout from "@/components/layout";
import React from "react";
import { Cards, NavBar, SearchBar, Sidebar } from "../../components";
import {
  BreakFluidIcon,
  TireWearIcon,
  RangeIcon,
  EnergyIcon,
} from "../../../data/icons";

const Index = () => {
  return (
    <>
      <Layout title={"test"}>
        <div className="dashboard__cards flex justify-around  w-full">
          <Cards
            title="Energy"
            icon={<EnergyIcon />}
            bgColor="bg-primarypurple"
          />

          <Cards title="Range" icon={<RangeIcon />} bgColor="bg-white" />
          <Cards title="Break Fluid" icon={<BreakFluidIcon />} bgColor="bg-white" />
          <Cards title="Tire Wear" icon={<TireWearIcon />} bgColor="bg-white" />
        </div>
      </Layout>
    </>
  );
};

export default Index;
