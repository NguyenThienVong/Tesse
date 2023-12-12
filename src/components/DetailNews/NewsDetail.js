import React from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
const NewsDetail = () => {
  return (
    <div className="mx-auto max-w-max ">
      <div className="mt-10 lg:ml-0 xl:ml-0 md:ml-[50px] sm:ml-[135px] xr:ml-[20px] se:ml-[20px]">
        <span className="text-gray-400"> Trang chủ / Tin tức </span> / Tin mới
        nhất
      </div>
      <div className="font-semibold text-2xl leading-8 xl:w-[736px] lg:w-[736px] md:w-auto my-10 xl:mx-0 lg:mx-0 md:mx-10 se:mx-2 xr:mx-4">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts
      </div>
      <div className="xl:w-[736px] xl:h-[414px] lg:w-[736px] lg:h-[414px]">
        <img src="/img/NewsDetail.png" className="object-cover" />
      </div>
      <div className="xl:w-[736px] lg:w-[736px] font-medium mt-6 text-sm not-italic md:mx-2 sm:mx-2 xr:mx-4 se:mx-2">
        Despite bitcoin’s (BTC) price dipping 6.4% this week and hovering below
        the $26K mark, a flurry of activity was noted between September 5th and
        6th as several substantial ‘sleeping bitcoins’ stirred. After a lull of
        slightly over six years, an individual splurged 359.92 BTC, equivalent
        to $9.2 million, across eight distinct transactions. Moreover, on
        Wednesday, September 6, an untouched trove of 500 bitcoins was mobilized
        for the first time in nearly seven years.
      </div>
      <div className="text-xl font-medium not-italic my-4 md:mx-2 sm:mx-2 xr:mx-7 se:mx-7">
        Dormant for Years, $21 Million in ‘Sleeping Bitcoins’ Spring to Life
      </div>
      <div className="xl:w-[736px] lg:w-[736px] sm:mx-2 text-gray-400 leading-6 md:mx-2 xr:mx-4 se:mx-2">
        <p className="md:mx-2  ">
          {" "}
          Many bitcoin enthusiasts keep their coins tucked away for years,
          sometimes even spanning decades. However, at the owner’s discretion,
          these dormant bitcoins occasionally see the light of day, either being
          spent or shifted for various motives.
        </p>

        <p className="my-10 md:mx-2 sm:mx-2 ">
          This week, despite BTC’s value against the U.S. dollar not being as
          robust as earlier in the year, some holders have chosen to activate
          old unspent transaction outputs (UTXOs). On September 5, 2023, an
          entity or individual opted to mobilize a total of 359.92 BTC through
          eight distinct transactions (1, 2, 3, 4, 5, 6, 7, 8), as detected by
          btcparser.com.{" "}
        </p>

        <p className="md:mx-2 sm:mx-2 ">
          Four of these transactions secured confirmation at block height
          806295, while the remaining three found confirmation at block height
          806,299. These transactions originated from coins acquired between
          June 13, 2017, and June 23, 2017. All eight transfers were executed
          with minimal to no discretion, earning them low privacy ratings on
          Blockchair’s privacy meter tool. At present BTC exchange rates, this
          cache of 359.92 BTC is valued at $9.2 million.
        </p>

        <p className="my-10 md:mx-2 sm:mx-2 ">
          The subsequent day witnessed a transfer from an address established on
          October 12, 2016, nearly seven years prior. This specific transaction
          involved 500 BTC, equivalent to $12.79 million at current rates. The
          address “14LZG” initiated this transfer for the first time at block
          height 806,465. Two beneficiaries were on the receiving end, with one
          pocketing 150 BTC and the other 350 BTC. This transaction, too, lacked
          discretion, scoring a mere 0 out of 100 on Blockchair’s privacy tool,
          with identified address matches being one of the vulnerabilities. The
          reasons behind these so-called ‘sleeping bitcoins’ springing to life
          after prolonged periods remain a mystery. It’s crucial to clarify that
          the terms “spend” or “spent” in this context merely indicate a
          transfer to a different address. While this could imply a sale on the
          open market, it might also suggest the owner’s shift to an alternative
          cold storage method.
        </p>
        <p className="md:mx-2 sm:mx-2 ">
          What do you think about the sleeping bitcoins spent on Tuesday and
          Wednesday? Share your thoughts and opinions about this subject in the
          comments section below.
        </p>
      </div>
      <div className="xl:flex lg:flex md:flex  sm:hidden xr:hidden se:hidden my-10">
        <div>
          <button className="text-sm font-bold text-regal-Primary">
            {" "}
            <span>
              <ArrowLeftOutlined />
            </span>{" "}
            Bài viết trước đó
          </button>
          <div className="w-[344px] font-normal text-sm leading-5">
            Biggest Movers: SHIB Hovers Higher, Despite Market Consolidation
          </div>
        </div>
        <div className="ml-10">
          <button className="text-sm font-bold text-regal-Primary justify-items-end ml-52">
            {" "}
            Bài viết tiếp theo{" "}
            <span>
              <ArrowRightOutlined />
            </span>
          </button>
          <div className="w-[344px] text-right font-normal text-sm leading-5">
            Biggest Movers: SHIB Hovers Higher, Despite Market Consolidation
          </div>
        </div>
      </div>
      <div className="xl:hidden lg:hidden md:hidden sm:block">
        <div className="flex justify-center my-10">
          <div className="text-5xl mx-10 cursor-pointer hover:shadow-10xl hover:cursor-pointer hover:rounded-full ease-in-out duration-300">
            <LeftCircleOutlined />
          </div>
          <div className="text-5xl mx-10 cursor-pointer hover:shadow-10xl hover:cursor-pointer hover:rounded-full ease-in-out duration-300">
            <RightCircleOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
