import { useEffect, useState } from "react";

export const ReactWebSocket = () => {
  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  const [bids, setBids] = useState([0]);

  useEffect(() => {
    const ws = new WebSocket("wss://ws.bitstamp.net");
    ws.onopen = () => {
      ws.send(JSON.stringify(apiCall));
    };
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        if (json.event == "data") {
          setBids(json.data.bids.slice(0, 5));
        }
      } catch (err) {
        console.log(err);
      }
    };
    return () => ws.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstBids = bids.map((item, index) => (
    <span key={index}>
      <p> {item}</p>
    </span>
  ));

  return (
    <>
      <h1>Sockets Example</h1>
      <h3>Websocket</h3>
      <section>
        <span>Last message: {firstBids}</span>
      </section>
    </>
  );
};
