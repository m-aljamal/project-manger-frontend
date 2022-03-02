import React from "react";
import { useParams } from "react-router-dom";
import { Sort } from "src/generated/generates";
import { useEmployeesListDiscounts } from "src/utils/discount";
import SingleDiscount from "./SingleDiscount";

const NotApprovedDiscount = () => {
  const { projectId } = useParams();
  const { discounts, error } = useEmployeesListDiscounts(
    projectId as string,
    Sort.Desc,
    false
  );
  return (
    <div>
      <p>الخصومات غير المؤكدة</p>
      {discounts.map((discount) => (
        <SingleDiscount discount={discount} key={discount.id} />
      ))}
    </div>
  );
};

export default NotApprovedDiscount;
