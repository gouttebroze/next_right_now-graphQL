import Nav from '@/layouts/core/components/Nav';

//import Nav from '@/layouts/core/components/Nav';

import Tooltip from '@/common/components/dataDisplay/Tooltip';
import { BUILT_IN_FEATURES_SIDEBAR_LINKS } from '@/layouts/demo/components/BuiltInFeaturesSidebar';
import { BUILT_IN_UTILITIES_SIDEBAR_LINKS } from '@/layouts/demo/components/BuiltInUtilitiesSidebar';
import { NATIVE_FEATURES_SIDEBAR_LINKS } from '@/layouts/demo/components/NativeFeaturesSidebar';
import { LogEvent } from '@/modules/core/amplitude/types/Amplitude';
import { Asset } from '@/modules/core/data/types/Asset';
import { SidebarLink } from '@/modules/core/data/types/SidebarLink';
import GraphCMSAsset from '@/modules/core/gql/components/GraphCMSAsset';
//import I18nLink from '@/modules/core/i18n/components/I18nLink';
//import useI18n, { I18n } from '@/modules/core/i18n/hooks/useI18n';
// import {
//   isActive,
//   resolveI18nHomePage,
// } from '@/modules/core/i18n/i18nRouter';
import { Amplitude } from '@amplitude/react-amplitude';
import {
  css,
  useTheme,
} from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import map from 'lodash.map';
import {
  NextRouter,
  useRouter,
} from 'next/router';
import React from 'react';
//import { useTranslation } from 'react-i18next';
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav as NavStrap,
  Navbar,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import { logEvent } from 'amplitude-js';
import Logo from '@/common/components/dataDisplay/Logo';
import { NRN_CO_BRANDING_LOGO_URL } from '@/app/constants';

export type Props = {};

const DefaultNav: React.FunctionComponent<Props> = () => {
  //const { t } = useTranslation();
  const router: NextRouter = useRouter();
  const theme = useTheme();
  //const { locale }: I18n = useI18n();
  const {
    primaryColor,
    logo,
  } = theme;

  return (
    
        <Navbar
          id={'nav'}
          color="black"
          light
          css={css`
            background-color: black;
            align-items: center;

            @media (min-width: 992px) {
              margin-left: 80px;
              margin-right: 80px;
            }

            @media (max-width: 991.98px) {
              margin-left: 10px;
              margin-right: 10px;

              li {
                margin: 10px !important;
              }
            }

            @media (max-width: 350px) {
              padding: 0 !important;
            }

            .brand-logo {
              min-width: 175px;
            }

            .navItemsMenu {
              padding: 0 10px;

              @media (max-width: 991.98px) {
                a {
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.30) !important;
                }
              }
            }

            .navbar-nav {
              flex-direction: row;

              li {
                margin: 10px 20px;
                text-align: center;
                justify-content: center;

                a {
                  cursor: pointer;
                  color: red !important;
                }
              }
            }

            .nav-link {
              &.active {
                font-weight: bold;
                color: ${primaryColor} !important;
              }
            }

            .dropdown {
              padding-top: 8px;
              padding-bottom: 8px;
              cursor: pointer;

              .dropdown-toggle {
                &.active {
                  color: ${primaryColor};
                }
              }

              .dropdown-menu {
                z-index: 10000;
              }

              .dropdown-item {
                max-height: 30px;
                padding-top: 0;

                .nav-link {
                  padding: 4px;
                }
              }
            }

            .dropdown-header,
            .dropdown-divider {
              cursor: initial;
            }
          `}
        >
         
          <NavStrap navbar>
          <section>
        <div>
          <Logo
            id={'footer-logo-unly-brand'}
            logo={{
              url: NRN_CO_BRANDING_LOGO_URL,
              link: {
                url: 'https://gitlab.com/HGouttebroze',
                target: '_blank',
              },
            } as unknown as Asset}
            width={400}
            height={200}
            //sizesMultipliers={logoSizesMultipliers}
          />
        </div>
      </section>
            <NavItem>
              
                
             
            </NavItem>

            <NavItem>
              
                         

                  
            </NavItem>

            <NavItem>
              <Col className={'navItemsMenu'}>
                <Row className={'justify-content-center'}>
                 
                </Row>
              </Col>
            </NavItem>

            <NavItem>
              <Col className={'navItemsMenu'}>
                <Row className={'justify-content-center'}>
                  <Tooltip
                    overlay={<span>Visit our Github branch for the current preset and navigate through the source code!</span>}
                  >
                   
                  </Tooltip>
                </Row>
              </Col>
            </NavItem>

            
                    
                  
          </NavStrap>
        </Navbar>
     
  );
};

export default DefaultNav;
