import Razorpay from "razorpay";
const instance = new Razorpay({
  key_id: "rzp_test_2RzayNagjiaDMu",
  key_secret: "PbMU9S5Nok0NvI4orOLDImct",
});

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const getKey = async (req, res) => {
  try {
    const key = "rzp_test_2RzayNagjiaDMu";
    res.status(200).json({
      success: true,
      key,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

import crypto from "crypto";

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const key_secret = "PbMU9S5Nok0NvI4orOLDImct";

  const hmac = crypto.createHmac("sha256", key_secret);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest("hex");

  if (generated_signature === razorpay_signature) {
    res.redirect(`http://localhost:3000/success`);
  } else {
    res.status(400).json({
      success: false,
      error: "Payment verification failed",
    });
  }
};

// import Razorpay from "razorpay";
// const instance = new Razorpay({
//   key_id: " rzp_test_2RzayNagjiaDMu",
//   key_secret: "PbMU9S5Nok0NvI4orOLDImct",
// });
// export const checkout = async (req, res) => {
//   const options = {
//     amount: 50000,
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);
//   console.log(order);
//   res.status(200).json({
//     success: true,
//   });
// };
