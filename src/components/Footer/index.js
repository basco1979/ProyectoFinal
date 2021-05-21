import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
              <S.Language>{t("Contact")}</S.Language>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href="mailto:info@minube.com.ar">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a></Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Language>{t("Company")}</S.Language>
                <S.Large to="/">
                  {t("About")}
                </S.Large>
                <S.Large to="/">
                  {t("Blog")}
                </S.Large>
                <S.Large to="/">
                  {t("Press")}
                </S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.png"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/minube"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/minube"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/minube/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/MiNube/"
                  src="instagram.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
