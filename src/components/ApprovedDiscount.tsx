import React from "react";
import { useParams } from "react-router-dom";
import { Sort } from "src/generated/generates";
import { useEmployeesListDiscounts } from "src/utils/discount";
import SingleDiscount from "./SingleDiscount";

const ApprovedDiscount = () => {
  const { projectId } = useParams();
  const { discounts, error } = useEmployeesListDiscounts(
    projectId as string,
    Sort.Desc,
    true
  );
  console.log(discounts);
  
  return (
    <div>
      <p>الخصومات المؤكدة</p>
      <div>
        {discounts.map((discount) => (
          <SingleDiscount discount={discount} key={discount.id} />
        ))}
      </div>
    </div>
  );
};

export default ApprovedDiscount;
