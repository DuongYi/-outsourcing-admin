/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AlbumIcon from "@material-ui/icons/Album";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import CameraIcon from "@material-ui/icons/Camera";
import ChatIcon from "@material-ui/icons/Chat";
import CheckBoxRoundedIcon from "@material-ui/icons/CheckBoxRounded";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HistoryIcon from "@material-ui/icons/History";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MoneyIcon from "@material-ui/icons/Money";
import MoneyRoundedIcon from "@material-ui/icons/MoneyRounded";
import PaymentIcon from "@material-ui/icons/Payment";
import PublicIcon from "@material-ui/icons/Public";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsSoccerTwoToneIcon from "@material-ui/icons/SportsSoccerTwoTone";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import StoreIcon from "@material-ui/icons/Store";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import PropTypes from "prop-types";
import { Link as RouterLink, useLocation } from "react-router-dom";

import NavSection from "../NavSection";
import Scrollbar from "../Scrollbar";

const sections = [
  {
    title: "Menu tổng",
    items: [
      {
        title: "Thống kê",
        path: "/thong-ke",
        icon: <AssessmentIcon fontSize="small" />,
      },
      {
        title: "Thành viên",
        path: "/thanh-vien",
        icon: <SupervisorAccountIcon fontSize="small" />,
      },
      {
        title: "Điểm danh",
        path: "/diem-danh",
        icon: <AssignmentTurnedInIcon fontSize="small" />,
      },
      {
        title: "Doanh thu chi tiết",
        path: "/doanh-thu",
        icon: <AccountBalanceIcon fontSize="small" />,
      },
      {
        title: "Chat thế giới",
        icon: <ChatIcon fontSize="small" />,
        children: [
          {
            title: "Thẻ cào",
            path: "/nap-the-cao",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "Ví thẻ siêu rẻ",
            path: "/nap-tsr",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Nạp tiền",
        icon: <LocalAtmIcon fontSize="small" />,
        children: [
          {
            title: "Nạp từ ví THESIEURE",
            path: "/nap-tsr",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "Nạp từ ví MOMO",
            path: "/nap-momo",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
          {
            title: "Nạp từ ngân hàng",
            path: "/nap-atm",
            icon: <PaymentIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Gạch thẻ",
        icon: <MoneyRoundedIcon fontSize="small" />,
        children: [
          {
            title: "Thẻ khách nạp",
            path: "/the-khach-nap",
            icon: <DirectionsWalkIcon fontSize="small" />,
          },
          {
            title: "Thẻ thành công",
            path: "/the-thanh-cong",
            icon: <CheckBoxRoundedIcon fontSize="small" />,
          },
          {
            title: "Cài đặt",
            path: "/cai-dat-gach-the",
            icon: <SettingsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Rút tiền",
        icon: <TransferWithinAStationIcon fontSize="small" />,
        children: [
          {
            title: "Rút tiền",
            path: "/ruttien/rut-tien",
            icon: <TransferWithinAStationIcon fontSize="small" />,
          },
          {
            title: "Lịch sử rút thẻ cào",
            path: "/ruttien/lich-su-rut-the-cao",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "Danh sách thẻ cào",
            path: "/ruttien/danh-sach-the-cao",
            icon: <ListAltIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
  {
    title: "Giao dịch tự động",
    items: [
      {
        title: "Bán nick",
        icon: <RemoveShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: "Danh sách giao dịch",
            path: "/bannick/danh-sach-giao-dich",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Danh sách tên miền block",
            path: "/bannick/danh-sach-ten-mien-block",
            icon: <FormatListBulletedIcon fontSize="small" />,
          },
          {
            title: "Giao dịch",
            path: "/bannick/giao-dich",
            icon: <CompareArrowsIcon fontSize="small" />,
          },
          {
            title: "Config giá",
            path: "/bannick/config-gia",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Nhập nick",
        icon: <AddShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: "Danh sách giao dịch",
            path: "/nhapnick/danh-sach-giao-dich",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Danh sách tên miền block",
            path: "/nhapnick/danh-sach-ten-mien-block",
            icon: <FormatListBulletedIcon fontSize="small" />,
          },
          {
            title: "Giao dịch",
            path: "/nhapnick/giao-dich",
            icon: <CompareArrowsIcon fontSize="small" />,
          },
          {
            title: "Config giá",
            path: "/nhapnick/config-gia",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Bán đồ",
        icon: <RemoveShoppingCartOutlinedIcon fontSize="small" />,
        children: [
          {
            title: "Đơn hàng",
            path: "/bando/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Đồ đang bán",
            path: "/bando/do-dang-ban",
            icon: <StoreIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Bán vàng",
        icon: <SportsSoccerIcon fontSize="small" />,
        children: [
          {
            title: "Đơn hàng",
            path: "/banvang/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử rút vàng",
            path: "/banvang/lich-su-rut-vang",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "Cài đặt bán vàng",
            path: "/banvang/cai-dat-ban-vang",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Cài đặt nhân vật",
            path: "/banvang/cai-dat-nhan-vat",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Nhập vàng",
        icon: <SportsSoccerTwoToneIcon fontSize="small" />,
        children: [
          {
            title: "Đơn hàng",
            path: "/nhapvang/don-hang",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử rút vàng",
            path: "/nhapvang/lich-su-rut-vang",
            icon: <HistoryIcon fontSize="small" />,
          },
          {
            title: "Cài đặt bán vàng",
            path: "/nhapvang/cai-dat-ban-vang",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Cài đặt nhân vật",
            path: "/nhapvang/cai-dat-nhan-vat",
            icon: <SettingsApplicationsIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Rút vàng",
        icon: <SportsVolleyballIcon fontSize="small" />,
        children: [
          {
            title: "Thẻ cào",
            path: "/nap-the-cao",
            icon: <MoneyIcon fontSize="small" />,
          },
          {
            title: "Ví thẻ siêu rẻ",
            path: "/nap-tsr",
            icon: <AccountBalanceWalletIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
  {
    title: "Vòng quay",
    items: [
      {
        title: "Vòng quay có lãi",
        icon: <AlbumIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/vqcolai/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/vqcolai/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/vqcolai/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Vòng quay siêu cấp",
        icon: <BlurCircularIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/vqsieucap/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/vqsieucap/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/vqsieucap/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick cao cấp",
        icon: <CameraIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/quaynickcaocap/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/quaynickcaocap/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/quaynickcaocap/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick 50 tỷ",
        icon: <DonutSmallIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/quaynick50ty/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/quaynick50ty/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/quaynick50ty/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Quay nick Halloween",
        icon: <RadioButtonCheckedIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/qnhalloween/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/qnhalloween/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/qnhalloween/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Vòng quay đồ",
        icon: <PublicIcon fontSize="small" />,
        children: [
          {
            title: "Cài đặt",
            path: "/vqdo/cai-dat",
            icon: <SettingsIcon fontSize="small" />,
          },
          {
            title: "Danh sách phần thưởng",
            path: "/vqdo/danh-sach-phan-thuong",
            icon: <ListAltIcon fontSize="small" />,
          },
          {
            title: "Lịch sử",
            path: "/vqdo/lich-su",
            icon: <HistoryIcon fontSize="small" />,
          },
        ],
      },
    ],
  },
];

const useStyles = makeStyles(() => ({
  drawer: {
    "& .MuiDrawer-paperAnchorDockedLeft": {
      height: "calc(100%)",
      width: "280px",
      display: "block!important",
      position: "fixed!important",
    },
    "& .MuiDrawer-paper": {
      overflow: "hidden",
    },
  },
}));

function DashboardSidebar(props) {
  const classes = useStyles();
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const user = {
    name: "Vũ Đức Dương",
    avatar: "/static/images/avatar.png",
    gold: "1m",
    money: "200.000đ",
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "0px 0px 16px 16px",
      }}
    >
      <Scrollbar
        style={{ paddingRight: "16px" }}
        options={{ suppressScrollX: true }}
      >
        <Box style={{ padding: "16px" }}>
          <Box
            style={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              overflow: "hidden",
              padding: "16px",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                cursor: "pointer",
                height: 48,
                width: 48,
              }}
            />
            <Box ml={2}>
              <Typography color="textPrimary" variant="subtitle2">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Số dư: {user.money}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box style={{ padding: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              style={{
                "& + &": {
                  marginTop: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box style={{ padding: "16px 0 20px 0" }}>
          <Typography color="textPrimary" variant="subtitle2">
            Bạn cần giúp đỡ?
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
            style={{ marginTop: "8px" }}
          >
            Liên hệ chúng tôi
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            style={{ margin: "16px 0" }}
            to="/docs"
            variant="contained"
          >
            Hỗ trợ
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  // if (lgUp) {
  //   return (
  //     <Drawer
  //       anchor="left"
  //       open
  //       PaperProps={{
  //         sx: {
  //           backgroundColor: 'background.paper',
  //           height: 'calc(100% - 64px) !important',
  //           top: '64px !Important',
  //           width: 280
  //         }
  //       }}
  //       variant="permanent"
  //     >
  //       {content}
  //     </Drawer>
  //   );
  // }

  return (
    <Drawer className={classes.drawer} anchor="left" open variant="permanent">
      {content}
    </Drawer>
  );
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
