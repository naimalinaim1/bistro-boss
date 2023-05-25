import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";

const Order = () => {
  useTitle("Order");

  const categories = ["salad", "pizza", "soup", "desserts", "Drinks"];
  const location = useLocation();
  const initialIndex = categories.indexOf(
    location.search.split("=")[1]?.toLowerCase()
  );

  const [tabIndex, setTabIndex] = useState(initialIndex < 0 ? 0 : initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        bgImage={orderCover}
        title={"Order Food"}
        description={"Would you like to try a Dish?"}
      />
      <div className="max-w-[1100px] mx-auto my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel className="mt-10">
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
