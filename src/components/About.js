import M from "materialize-css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <div className="container">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>First
            </div>
            <div className="collapsible-body">
              <span>Ngô Xuân Toàn - SE171297</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Second
            </div>
            <div className="collapsible-body">
              <span>Chào mừng bạn đã đặt chân tới trang web của tôi</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Third
            </div>
            <div className="collapsible-body">
              <span>
                Hãy để mình mang tới cho bạn những trải nghiệm tuyệt vời nhất
                khi sử dụng trang web
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
