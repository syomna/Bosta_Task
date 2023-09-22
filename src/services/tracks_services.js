import axios from "axios";

export const getTrackService = async (trackNo) => {
  let trackData;
  try {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackNo}`
    );
      if (response.status === 200) trackData = response.data;
  } catch (err) {
    console.log(err);
  }
  return trackData;
};
