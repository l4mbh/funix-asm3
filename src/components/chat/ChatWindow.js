import React from "react";

import classes from "./ChatWindow.module.css";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPaperPlane,
  faShareNodes,
  faSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatWindow() {
  return (
    <div className={classes.chat_windowWrapper}>
      <Card className={classes.chat_chatWindow}>
        <CardHeader className={classes.chat_chatHeader}>
          Customer Support
        </CardHeader>
        <div className={classes.chat_Body}>
          <div className={classes.chat_sendMsg}>
            <p>Hi shop</p>
            <span className={classes.chat_sendMsgIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className={classes.chat_sendMsg}>
            <p>Em có một câu hỏi</p>
            <span className={classes.chat_sendMsgIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className={classes.chat_sendMsg}>
            <p>Bây giờ là mấy giờ rồi ạ?</p>
            <span className={classes.chat_sendMsgIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className={classes.chat_receiveMsg}>
            <p>Chào bạn!</p>
            <span className={classes.chat_receiveMsgIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className={classes.chat_receiveMsg}>
            <p>
              Bạn có thể tham khảo sản phẩm Apple Watch bên shop để tiện xem giờ
              nhé ạ..Bạn có thể tham khảo sản phẩm Apple Watch bên shop để tiện
              xem giờ nhé ạ.
            </p>
            <span className={classes.chat_receiveMsgIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
        <div className={`${classes.chat_chatFooter} card-footer`}>
          <div>
            <span className={classes.chat_chatFooterIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              className={classes.chat_chatFooterInput}
              type="text"
              placeholder="Enter here to chat ..."
            />
          </div>
          <div className={classes.chat_chatFooterActions}>
            <FontAwesomeIcon icon={faFile} />
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </Card>
    </div>
  );
}
