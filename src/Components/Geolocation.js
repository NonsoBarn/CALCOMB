import { useState, useEffect } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

const Geolocation = () => {
  const [country, setCountry] = useState("NG");

  useEffect(() => {
    if (country === null) {
      return;
    } else {
      const getCountry = async () => {
        const response = await axios.get(
          "https://api.ipregistry.co/?key=6djfg9168pm5gupe"
        );

        // console.log(response);
        const countryCode = response.data.location.country.code;
        setCountry(countryCode);

        // console.log(countryCode);
      };
      getCountry();
    }
  }, [country]);

  // countryCodeToFlag({ country });

  return (
    <div className="country">
      <ReactCountryFlag
        className="mb-1"
        countryCode={country}
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="US"
      />
    </div>
  );
};

export default Geolocation;
