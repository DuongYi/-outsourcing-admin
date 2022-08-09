import React, { Suspense, lazy } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import LoadingScreen from "src/components/LoadingScreen";

import Overview from "src/pages/dashboard/overview";
import Statistical from "src/pages/dashboard/statistical";
import DummyPage from "src/pages/dashboard/DummyPage";

//Nap tiền
import { Atm, Momo, TheSieuRe } from "src/pages/dashboard/recharge";

//Gạch thẻ
import {
  CustomerRecharge,
  CardSuccess,
  BrickSetting,
} from "src/pages/dashboard/gachthe";

//Rút tiền
import {
  Withdraw,
  WithdrawHistory,
  WithdrawListCard,
} from "src/pages/dashboard/withdraw";

//Bán vàng
import {
  GoldOrder,
  BanVangHistory,
  FactorSetting,
  BotGoldSetting
} from "src/pages/dashboard/BanVang";

const DashboardLayout = lazy(() =>
  import("src/components/dashboard/DashboardLayout")
);

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          exact
          path="/404"
          component={lazy(() => import("src/pages/view/Error404View"))}
        />

        <Route
          exact
          path="/login"
          component={lazy(() => import("src/pages/auth/Login"))}
        />

        <Route
          exact
          path="/*"
          render={() => (
            <Switch>
              <DashboardLayout>
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/thong-ke" component={Statistical} />
                <Route exact path="/thanh-vien" component={DummyPage} />
                <Route exact path="/diem-danh" component={DummyPage} />
                <Route exact path="/doanh-thu" component={DummyPage} />

                {/* Chat thế giới */}
                <Route
                  exact
                  path="/chat-tg/nap-the-cao"
                  component={DummyPage}
                />
                <Route exact path="/chat-tg/nap-tsr" component={DummyPage} />

                {/* Nạp tiền */}
                <Route exact path="/nap-tien/nap-tsr" component={TheSieuRe} />
                <Route exact path="/nap-tien/nap-momo" component={Momo} />
                <Route exact path="/nap-tien/nap-atm" component={Atm} />

                {/* Gạch thẻ */}
                <Route
                  exact
                  path="/gach-the/the-khach-nap"
                  component={CustomerRecharge}
                />
                <Route
                  exact
                  path="/gach-the/the-thanh-cong"
                  component={CardSuccess}
                />
                <Route
                  exact
                  path="/gach-the/cai-dat-gach-the"
                  component={BrickSetting}
                />

                {/* Rút tiền */}
                <Route exact path="/rut-tien/rut-tien" component={Withdraw} />
                <Route
                  exact
                  path="/rut-tien/lich-su-rut-the-cao"
                  component={WithdrawHistory}
                />
                <Route
                  exact
                  path="/rut-tien/danh-sach-the-cao"
                  component={WithdrawListCard}
                />

                {/* Bán nick */}
                <Route
                  exact
                  path="/ban-nick/danh-sach-giao-dich"
                  component={Overview}
                />
                <Route
                  exact
                  path="/ban-nick/danh-sach-ten-mien-block"
                  component={Overview}
                />
                <Route exact path="/ban-nick/giao-dich" component={Overview} />
                <Route exact path="/bannick/config-gia" component={Overview} />

                {/* Nhập nick */}
                <Route
                  exact
                  path="/nhap-nick/danh-sach-giao-dich"
                  component={Overview}
                />
                <Route
                  exact
                  path="/nhap-nick/danh-sach-ten-mien-block"
                  component={Overview}
                />
                <Route exact path="/nhap-nick/giao-dich" component={Overview} />
                <Route
                  exact
                  path="/nhap-nick/config-gia"
                  component={Overview}
                />

                {/* Bán đồ */}
                <Route exact path="/ban-do/don-hang" component={Overview} />
                <Route exact path="/ban-do/do-dang-ban" component={Overview} />

                {/* Bán vàng */}
                <Route exact path="/ban-vang/don-hang" component={GoldOrder} />
                <Route
                  exact
                  path="/ban-vang/lich-su-rut-vang"
                  component={BanVangHistory}
                />
                <Route
                  exact
                  path="/ban-vang/cai-dat-ban-vang"
                  component={FactorSetting}
                />
                <Route
                  exact
                  path="/ban-vang/cai-dat-nhan-vat"
                  component={BotGoldSetting}
                />

                {/* Nhập vàng */}
                <Route exact path="/nhap-vang/don-hang" component={Overview} />
                <Route
                  exact
                  path="/nhap-vang/lich-su-rut-vang"
                  component={Overview}
                />
                <Route
                  exact
                  path="/nhap-vang/cai-dat-ban-vang"
                  component={Overview}
                />
                <Route
                  exact
                  path="/nhap-vang/cai-dat-nhan-vat"
                  component={Overview}
                />

                {/* Rút vàng */}
                <Route
                  exact
                  path="/rut-vang/nap-the-cao"
                  component={Overview}
                />
                <Route exact path="/rut-vang/nap-tsr" component={Overview} />

                {/* Vòng quay có lãi */}
                <Route exact path="/vqcolai/cai-dat" component={Overview} />
                <Route
                  exact
                  path="/vqcolai/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route exact path="/vqcolai/lich-su" component={Overview} />

                {/* Vòng quay siêu cấp */}
                <Route exact path="/vqsieucap/cai-dat" component={Overview} />
                <Route
                  exact
                  path="/vqsieucap/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route exact path="/vqsieucap/lich-su" component={Overview} />

                {/* Quay nick cao cấp */}
                <Route
                  exact
                  path="/quaynickcaocap/cai-dat"
                  component={Overview}
                />
                <Route
                  exact
                  path="/quaynickcaocap/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route
                  exact
                  path="/quaynickcaocap/lich-su"
                  component={Overview}
                />

                {/* Quay nick 50 tỷ */}
                <Route
                  exact
                  path="/quaynick50ty/cai-dat"
                  component={Overview}
                />
                <Route
                  exact
                  path="/quaynick50ty/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route
                  exact
                  path="/quaynick50ty/lich-su"
                  component={Overview}
                />

                {/* Quay nick Halloween */}
                <Route exact path="/qnhalloween/cai-dat" component={Overview} />
                <Route
                  exact
                  path="/qnhalloween/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route exact path="/qnhalloween/lich-su" component={Overview} />

                {/* Vòng quay đồ */}
                <Route exact path="/vqdo/cai-dat" component={Overview} />
                <Route
                  exact
                  path="/vqdo/danh-sach-phan-thuong"
                  component={Overview}
                />
                <Route exact path="/vqdo/lich-su" component={Overview} />
              </DashboardLayout>
            </Switch>
          )}
        />

        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
