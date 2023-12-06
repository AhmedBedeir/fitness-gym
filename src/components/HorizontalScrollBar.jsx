/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import Carousel from "react-material-ui-carousel";

function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  // Group the data into arrays of 4 items each
  const groupedData = [];
  for (let i = 0; i < data.length; i += 5) {
    groupedData.push(data.slice(i, i + 5));
  }

  return (
    <div style={{ border: "1px solid black" }}>
      {/* need to show 4 components in one slide */}
      <Carousel indicators={false} navButtonsAlwaysVisible 
        animation="slide"
        cycleNavigation={false}
      >
        {groupedData.map((group, index) => (
          <Box key={index} style={{ display: "flex" }}>
            {group.map((itm) => (
              <Box key={itm.id} title={itm.id} m="0 10px">
                <BodyPart
                  title={itm}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
    </div>
  );
}

export default HorizontalScrollBar;
