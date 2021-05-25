import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";
import Video from "./video2.mp4";
import './css.css'
import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock id="video">
      <Row type="flex" justify="space-between" align="middle" className="video-container w-100">
        <Fade bottom>

          <Col lg={24} md={11} sm={12} xs={24}>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
            </S.ContentWrapper>
          </Col>

          <Col>
            <ReactPlayer className="mt-4 video-container-player"
              url={Video}
              controls
              width="700px"
              height="100%"
            />
          </Col>

        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
