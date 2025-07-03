import React, { useState } from "react";
import { TabButton, TabList, TabContent } from "./style";

function Tabs({ tabsData = [] }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <>
      <TabList>
        {tabsData.map((tab, index) => (
          <li key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "h4" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TabButton>
          </li>
        ))}
      </TabList>
      <TabContent>
        {tabsData[selectIndex].content}
      </TabContent>
    </>
  );
}

export default Tabs;
