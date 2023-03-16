import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

const MaterialCard = ({ bannerName, width }) => {
  return (
    <Card className={`w-${width}`}>
      <CardHeader
        variant={"gradient"}
        color="cyan"
        className="mb-4 grid h-28 place-items-center bg-cyan-300"
      >
        <Typography variant="h3" color="white">
          {bannerName}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div class="relative mb-8">
          <input
            id="product-name"
            name="product-name"
            type="text"
            className="w-full h-10 text-gray-500  italic font-semibold font-sans placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-teal-500"
            placeholder="Name"
          />
          <label
            for="product-name"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
          >
            Product Name
          </label>
        </div>

        <div class="relative mb-8">
          <input
            id="quantity"
            name="quantity"
            type="text"
            className="w-full h-10 text-gray-500  italic font-semibold font-sans placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-teal-500"
            placeholder="Quantity"
          />
          <label
            for="quantity"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
          >
            Quantity
          </label>
        </div>

        <div class="relative mb-8">
          <input
            id="price"
            name="price"
            type="text"
            className="w-full h-10 text-gray-500  italic font-semibold font-sans placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-teal-500"
            placeholder="Price"
          />
          <label
            for="price"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
          >
            Price
          </label>
        </div>

        <div class="relative mb-8">
          <label
            for="message"
            className="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 "
          >
            Description
          </label>

          <label class="text-gray-700" for="message">
            <textarea
              class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              rows="5"
              cols="40"
            ></textarea>
          </label>
        </div>
      </CardBody>
    </Card>
  );
};

export default MaterialCard;
