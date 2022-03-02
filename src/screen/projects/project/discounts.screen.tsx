import ApprovedDiscount from "src/components/ApprovedDiscount";
import CreateDiscount from "src/components/CreateDiscount";
import NotApprovedDiscount from "src/components/NotApprovedDiscount";

const DiscountsList = () => {
  return (
    <div>
      <p>الخصومات</p>
      <CreateDiscount />
      <NotApprovedDiscount />
      <ApprovedDiscount />
    </div>
  );
};

export default DiscountsList;
