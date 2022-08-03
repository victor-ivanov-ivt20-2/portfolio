<template>
  <div class="dashboard">
    <div class="dashboard__menu">
      <img
        src="../../assets/dashboard/logo.svg"
        alt="logo"
        class="dashboard__logo"
      />
      <nav>
        <ul>
          <li>
            <img src="../../assets/dashboard/chart.svg" alt="" />
            <span> Overview </span>
          </li>
          <li>
            <img src="../../assets/dashboard/case.svg" alt="" />
            <span> Product </span>
          </li>
          <li>
            <img src="../../assets/dashboard/user.svg" alt="" />
            <span> Orders </span>
          </li>
          <li>
            <img src="../../assets/dashboard/checkout.svg" alt="" />
            <span> Checkout </span>
          </li>
          <li>
            <img src="../../assets/dashboard/settings.svg" alt="" />
            <span> Setting </span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="dashboard__content">
      <div class="header">
        <div class="welcome">
          <h1>Welcome Back, Marci</h1>
          <p>Here is the information about all your orders</p>
        </div>
        <div class="user__info">
          <div class="usefull__icons">
            <img src="../../assets/dashboard/search.svg" alt="" />
            <img src="../../assets/dashboard/bell.svg" alt="" />
          </div>
          <div class="user">
            <img class="avatar" src="../../assets/dashboard/avatar.png" alt="" />
            <span>Marci Fumons</span>
            <img src="../../assets/dashboard/chevron-down.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="statistics">
        <div>
          <div class="numbers">
            <div>
              <h1>89,935</h1>
              <span>Total users</span>
            </div>
            <img class="icon" src="../../assets/dashboard/icon.svg" alt="" />
          </div>
          <div class="updown">
            <img src="../../assets/dashboard/up.svg" alt="" />
            <span>10.2</span>
            <span>+1.01% this week</span>
          </div>
        </div>
        <div>
          <div class="numbers">
            <div>
              <h1>23,283.5</h1>
              <span>Total products </span>
            </div>
            <img class="icon" src="../../assets/dashboard/icon1.svg" alt="" />
          </div>
          <div class="updown">
            <img src="../../assets/dashboard/up.svg" alt="" />
            <span>3.1</span>
            <span>+0.49% this week</span>
          </div>
        </div>
        <div>
          <div class="numbers">
            <div>
              <h1>46,827</h1>
              <span>Total users</span>
            </div>
            <img class="icon" src="../../assets/dashboard/icon2.svg" alt="" />
          </div>
          <div class="updown">
            <img src="../../assets/dashboard/down.svg" alt="" />
            <span>2.56</span>
            <span>-0.91% this week</span>
          </div>
        </div>
        <div>
          <div class="numbers">
            <div>
              <h1>124,854</h1>
              <span>Refunded</span>
            </div>
            <img class="icon" src="../../assets/dashboard/icon3.svg" alt="" />
          </div>
          <div class="updown">
            <img src="../../assets/dashboard/up.svg" alt="" />
            <span>7.2</span>
            <span>+1.51% this week</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
.dashboard {
  display: flex;
  gap: 40px;
  font-family: "Poppins", sans-serif;
  margin: 60px 56px 0 56px;
  .dashboard__menu {
    position: relative;
    min-width: 230px;
    border-right: 1px solid #e6edff;
    .dashboard__logo {
      position: absolute;
      left: -5px;
    }
    nav {
      padding-top: 102px;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 28px;
        color: #7c8db5;
        li {
          display: flex;
          gap: 12px;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          cursor: pointer;
        }
        li:hover {
          color: #347ae2;
        }
      }
    }
  }
  .dashboard__content {
    width: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      h1 {
        margin: 0;
        font-weight: 500;
        font-size: 28px;
        line-height: 150%;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #7c8db5;
        margin: 4px 0 0 0;
        padding: 0;
      }
      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
      }
      .user__info {
        display: flex;
        gap: 32px;
        justify-content: center;
        align-items: baseline;
        .usefull__icons {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .user {
          display: flex;
          align-items: center;
          gap: 8px;
          .avatar {
            padding-right: 4px;
          }
        }
      }
    }
    .statistics {
      display: flex;
      gap: 76px;
      padding: 20px;
      margin-top: 32px;
      background: #ffffff;
      border: 1px solid #e6edff;
      border-radius: 12px;
      h1 {
        margin: 0;
        font-weight: 600;
        font-size: 28px;
        line-height: 150%;
      }
      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
      }
      .icon {
        width: 44px;
            height: 44px;
            box-shadow: 0px 2px 10px rgba(124, 141, 181, 0.12);
            border-radius: 12px;
      }
      .numbers {
        display: flex;
        justify-content: space-between;
      }
      .updown {
        padding-top: 12px;
        display: flex;
        gap: 8px;
        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #7C8DB5;
        }
        span:nth-child(3) {
            padding-left: 4px;
        }
      }
    }
    .statistics > div {
      width: 198px; 
    }
  }
}
</style>
