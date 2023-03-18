import React from "react";
import { useLocation } from "react-router-dom";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const OrderView = () => {
  let { state } = useLocation();
  const ordersOverviewData = [
    {
      icon: BellIcon,
      color: "text-green-500",
      title: "$2400, Design changes",
      description: "22 DEC 7:20 PM",
    },
    {
      icon: PlusCircleIcon,
      color: "text-red-500",
      title: "New order #1832412",
      description: "21 DEC 11 PM",
    },
    {
      icon: ShoppingCartIcon,
      color: "text-blue-500",
      title: "Server payments for April",
      description: "21 DEC 9:34 PM",
    },
    {
      icon: CreditCardIcon,
      color: "text-orange-500",
      title: "New card added for order #4395133",
      description: "20 DEC 2:20 AM",
    },
    {
      icon: LockOpenIcon,
      color: "text-pink-500",
      title: "Unlock packages for development",
      description: "18 DEC 4:54 AM",
    },
    {
      icon: BanknotesIcon,
      color: "text-blue-gray-900",
      title: "New order #9583120",
      description: "17 DEC",
    },
  ];

  console.log(state);

  return (
    <>
      <div className="flex flex-col flex-wrap justify-start my-3 mx-3 gap-y-2">
        <Typography variant="h1" className="font-sans font-bold">
          #19736
        </Typography>
        <Typography className="text-gray-400">27 November 1996</Typography>
        <div className="flex flex-row flex-wrap gap-x-2 ">
          <span class="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            refused
          </span>
          <span class="px-4 py-2  text-base rounded-full text-yellow-600  bg-yellow-200 ">
            pending
          </span>
          <span class="px-4 py-2  text-base rounded-full text-green-600  bg-green-200 ">
            accepted
          </span>
        </div>
      </div>

      {/* Cards section */}
      <div className="mt-12 mb-8 ">
        <div className=" grid  lg:grid-cols-3 justify-center items-center  lg:flex-row lg:justify-evenly lg:items-start gap-5">
          <Card className=" shadow-lg py-5 col-span-2 md:col-span-4">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0 flex flex-col md:flex-row ">
              <div className="flex gap-x-3 my-5 justify-start md:w-3/4 items-start ">
                <div class="inline-flex items-center bg-white leading-none text-white rounded-full p-2 shadow text-teal text-sm">
                  <span class="inline-flex bg-yellow-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
                  <span class="inline-flex px-2 text-gray-600 text-bold">
                    Unfullfilled
                  </span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-white rounded-full p-2 shadow text-teal text-sm">
                  <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
                  <span class="inline-flex px-2 text-gray-600 text-bold">
                    Paid
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-y-3 ml-5 ">
                <Card
                  shadow={false}
                  className="flex flex-row justify-evenly gap-5 "
                >
                  <div class="relative m-6 inline-flex w-fit">
                    <div class="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
                      2
                    </div>
                    {/* <div class="flex items-center justify-center rounded-lg bg-pink-500 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200"> */}
                    <Avatar
                      src="/images/logo.png"
                      alt="product image"
                      variant="circular"
                      className="h-16 w-48 border border-gray-300 shadow-md  object-contain"
                    />
                    {/* </div> */}
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      Belgian Chocolate And Hazelnut Cake (RED Glaze) (1000-1100
                      Grams)
                    </Typography>
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      $2600 (2600 x 1)
                    </Typography>
                  </div>
                </Card>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <Card
                  shadow={false}
                  className="flex flex-row justify-evenly gap-5 "
                >
                  <div class="relative m-6 inline-flex w-fit">
                    <div class="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
                      2
                    </div>
                    {/* <div class="flex items-center justify-center rounded-lg bg-pink-500 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200"> */}
                    <Avatar
                      src="/images/logo.png"
                      alt="product image"
                      variant="circular"
                      className="h-16 w-48 border border-gray-300 shadow-md  object-contain"
                    />
                    {/* </div> */}
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      Belgian Chocolate And Hazelnut Cake (RED Glaze) (1000-1100
                      Grams)
                    </Typography>
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      $2600 (2600 x 1)
                    </Typography>
                  </div>
                </Card>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <Card
                  shadow={false}
                  className="flex flex-row justify-evenly gap-5 "
                >
                  <div class="relative m-6 inline-flex w-fit">
                    <div class="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
                      2
                    </div>
                    {/* <div class="flex items-center justify-center rounded-lg bg-pink-500 px-8 py-6 text-center text-white shadow-lg dark:text-gray-200"> */}
                    <Avatar
                      src="/images/logo.png"
                      alt="product image"
                      variant="circular"
                      className="h-16 w-48 border border-gray-300 shadow-md  object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      Belgian Chocolate And Hazelnut Cake (RED Glaze) (1000-1100
                      Grams)
                    </Typography>
                    <Typography
                      variant="h1"
                      className="font-sans text-gray-400"
                    >
                      $2600 (2600 x 1)
                    </Typography>
                  </div>
                </Card>
              </div>
            </div>
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col px-5">
              <Typography variant={"h1"} className="text-2xl font-sans ">
                Instructions form Rajat
              </Typography>
              <Typography className={"text-lg text-gray-600"}>
                Please make 2 ckaes for me thank you
              </Typography>
            </div>
          </Card>

          {/* <div className=""> */}
          {/* --------------------Contact Details------------------------- */}
          <Card className="w-full shadow-lg gap-y-3 py-5 col-span-2 md:col-span-2 h-[467px] ">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0 flex">
              <div className="flex flex-col">
                <Typography variant={"h1"} className="text-xl font-sans">
                  Customer
                </Typography>
                <Typography variant={"h3"} className="text-base font-sans mt-3">
                  Shipping and billing Address
                </Typography>
                <Typography className="text-gray-500 font-sans">
                  {state.customerName}'s
                </Typography>
                <Typography className="text-gray-500 font-sans">
                  68/339 Dev Nagar Reghar Pura karol Bagh
                </Typography>
                <Typography>Pin: &nbsp;11005</Typography>
                <hr class="h-px my-6  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <Typography variant={"h1"} className="text-xl font-sans ">
                  Contact Detials
                </Typography>
                <Typography className="text-gray-500 font-sans">
                  Phone number : &nbsp; +91 999999999
                </Typography>
                <Typography className="text-gray-500 font-sans">
                  Email Address : &nbsp; rajatsingharora@gmail.com
                </Typography>
              </div>
            </div>
          </Card>
          {/*-------------------- Cost Breakup------------------ */}
          <Card className=" w-full shadow-lg gap-y-3 py-5 col-span-2 md:col-span-2">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0 flex">
              <div class="inline-flex items-center bg-white leading-none text-white rounded-full p-2 shadow text-teal text-sm">
                <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
                <span class="inline-flex px-2 text-gray-600 text-bold">
                  Paid
                </span>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between items-center px-8 py-3">
                <div className="flex flex-col">
                  <Typography>Subtotal</Typography>
                  <Typography>1 item</Typography>
                </div>
                <Typography>2000</Typography>
              </div>

              <div className="flex justify-between items-center px-8 py-3">
                <div className="flex flex-col">
                  <Typography>Subtotal</Typography>
                  <Typography>1 item</Typography>
                </div>
                <Typography>2000</Typography>
              </div>

              <div className="flex justify-between items-center px-8 py-3">
                <div className="flex flex-col">
                  <Typography>Subtotal</Typography>
                  <Typography>1 item</Typography>
                </div>
                <Typography>2000</Typography>
              </div>

              <div className="flex justify-between items-center px-8 py-3">
                <div className="flex flex-col">
                  <Typography>Subtotal</Typography>
                  <Typography>1 item</Typography>
                </div>
                <Typography>2000</Typography>
              </div>

              <div className="flex justify-between items-center px-8 py-3">
                <div className="flex flex-col">
                  <Typography>Subtotal</Typography>
                  <Typography>1 item</Typography>
                </div>
                <Typography>2000</Typography>
              </div>
            </div>
          </Card>
          {/* ---------------Order Time Line-----------------------*/}
          <Card className="  col-span-2 md:col-span-4">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-6 col-span-2"
            >
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Orders Overview
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <ArrowUpIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-green-500"
                />
                <strong>24%</strong> this month
              </Typography>
            </CardHeader>
            <CardBody className="pt-0 flex ">
              <ol class="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
                <li>
                  <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green-600 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
                    <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                      01.07.2021
                    </p>
                  </div>
                  <div class="mt-2 ml-4 pb-5 md:ml-0">
                    <h4 class="mb-1.5 text-xl font-semibold">
                      Title of section 1
                    </h4>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare. Maecenas placerat facilisis mollis. Duis
                      sagittis ligula in sodales vehicula.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
                    <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                      13.09.2021
                    </p>
                  </div>
                  <div class="mt-2 ml-4 pb-5 md:ml-0">
                    <h4 class="mb-1.5 text-xl font-semibold">
                      Title of section 2
                    </h4>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      Libero expedita explicabo eius fugiat quia aspernatur
                      autem laudantium error architecto recusandae natus
                      sapiente sit nam eaque, consectetur porro molestiae ipsam
                      an deleniti.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="flex-start flex items-center pt-2 md:block md:pt-0">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:ml-0 md:mr-0 md:-mt-[5px]"></div>
                    <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                      25.11.2021
                    </p>
                  </div>
                  <div class="mt-2 ml-4 pb-5 md:ml-0">
                    <h4 class="mb-1.5 text-xl font-semibold">
                      Title of section 3
                    </h4>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      Voluptatibus temporibus esse illum eum aspernatur, fugiat
                      suscipit natus! Eum corporis illum nihil officiis tempore.
                      Excepturi illo natus libero sit doloremque, laborum
                      molestias rerum pariatur quam ipsam necessitatibus
                      incidunt, explicabo.
                    </p>
                  </div>
                </li>
              </ol>

              {/* <div className="flex "> */}
              {/* <div
                  className={`border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t`}
                >
                  {React.createElement(ordersOverviewData[0].icon, {
                    className: `!w-5 !h-5 bg-red-500 rounded-full ${"after:w-6"}`,
                  })}
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {ordersOverviewData[0].title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {ordersOverviewData[0].description}
                    </Typography>
                  </div>
                </div>

                <div
                  className={`border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t`}
                >
                  {React.createElement(ordersOverviewData[0].icon, {
                    className: `!w-5 !h-5 bg-red-500 rounded-full ${"after:w-6"}`,
                  })}
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {ordersOverviewData[0].title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {ordersOverviewData[0].description}
                    </Typography>
                  </div>
                </div> */}
              {/* </div> */}

              {/* {ordersOverviewData.map(
                ({ icon, color, title, description }, key) => (
                  <div key={title} className="flex items-start gap-4 py-3">
                    <div
                      className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                        key === ordersOverviewData.length - 1
                          ? "after:h-0"
                          : "after:h-4/6"
                      }`}
                    >
                      {React.createElement(icon, {
                        className: `!w-5 !h-5 ${color}`,
                      })}
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="block font-medium"
                      >
                        {title}
                      </Typography>
                      <Typography
                        as="span"
                        variant="small"
                        className="text-xs font-medium text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </div>
                  </div>
                )
              )} */}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderView;
