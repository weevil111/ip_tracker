import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Map from "./components/Map/Map"
function App() {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(res => {
        return res.json();
      }).then(data => {
        setIp(data.ip);
      }).catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    if (!ip) {
      return;
    }
    setIpInfo(null);
    let isDomain = false;

    // check whether the field is IP or domain :
    // An ip won't contain non-numeric character except '.'
    Array.prototype.every.call(ip, (char) => {
      if (char === ".") {
        return true;
      }
      const digit = Number(char);
      if (Number.isNaN(digit)) {
        isDomain = true;
        return false;
      }
    })

    let url = "https://geo.ipify.org/api/v1?apiKey=at_T4epF3FC679ZOAKYAlNtnvH1F8Jxk";
    if (isDomain) {
      url = `${url}&domain=${ip}`;
    } else {
      url = `${url}&ip=${ip}`;
    }
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setIpInfo(data);
      })
  }, [ip])

  let lat = null;
  let lng = null;
  if (ipInfo && ipInfo.location) {
    lat = ipInfo.location.lat;
    lng = ipInfo.location.lng;
  }
  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser}></Login>
      ) : (
        <>
          <Header ip={ip} ipInfo={ipInfo} setIp={setIp}></Header>
          <Map latitude={lat} longitude={lng}></Map>
        </>
      )}
    </div>
  );
}

export default App;
