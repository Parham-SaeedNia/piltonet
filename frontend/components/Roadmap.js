import React from "react";

const Roadmap = () => {
  return (
    <>
      <div id="2" className="titles-container">
        <span> نقشه راه پیلتونت</span>
      </div>
      <div className="roadmap-container">
        <div className="roadmap-contents-container">
          <div className="roadmap-contents">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>زمستان ۱۳۹۹</span>
            <p>شناسایی نیاز و شکل‌گیری ایده تیم سازی ثبت تفاهم‌نامه با ققنوس</p>
          </div>
          <div className="roadmap-contents">
            <div className="current-outer-circle">
              <div className="current-inner-circle"></div>
            </div>
            <span>بهار ۱۴۰۰</span>
            <p>انتشار نسخه اول سپیدنامه توسعه محصول اولیه جذب سرمایه</p>
          </div>
          <div className="roadmap-contents">
            <div className="outer-circle current">
              <div className="inner-circle current"></div>
            </div>
            <span>تابستان ۱۴۰۰</span>
            <p>
              ثبت عمومی شرکت، مرحله اول عرضه عمومی توکن و جمع سپاری، ورود به
              بازار
            </p>
          </div>
          <div className="roadmap-contents">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>پاییز ۱۴۰۰</span>
            <p>
              جذب شرکای راهبردی جدید، توسعه محصول و بازار، ثبت توکن در صرافی های
              ارز دیجیتال داخلی
            </p>
          </div>
          <div className="roadmap-contents">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>زمستان ۱۴۰۰</span>
            <p>
              پذیرش دارایی های دیجیتال خارج از شبکه ققنوس، حضور در بازار جهانی
              رمز ارزها
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
