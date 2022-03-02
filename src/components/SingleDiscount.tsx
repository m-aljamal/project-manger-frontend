import React from "react";
import { useDeleteDiscount, useUpdateDiscount } from "src/utils/discount";

const SingleDiscount = ({ discount }: any) => {
  const { mutate, error: deleteDiscountError } = useDeleteDiscount();

  const { mutate: updateDiscount, error: updateDiscountError } =
    useUpdateDiscount();

  return (
    <div
      key={discount.id}
      className={`${discount.approved ? "bg-green-400" : "bg-white"} m-4 p-2`}
    >
      <p>{discount.employee.name}</p>
      <p>{discount.id}</p>
      <p>{discount.absence ? `خصم الغياب $ ${discount.absence}` : null}</p>

      <p>{discount.late ? `خصم التأخر $ ${discount.late}` : null}</p>
      <p>
        {discount.punishment ? `خصم العقوبات $ ${discount.punishment}` : null}
      </p>
      <p>{new Date(discount.date).toLocaleDateString()}</p>
      <p>{discount.notes}</p>
      <p>الراتب {discount.employee.salary}</p>
      <p>الوظيفة {discount.employee.role}</p>

      <button
        onClick={() => mutate({ employeeId: discount.id })}
        className="bg-blue-200 p-1"
      >
        حذف
      </button>

      <button
        className="bg-green-200 p-1 mr-5"
        onClick={() =>
          updateDiscount({ id: discount.id, discount: { approved: true } })
        }
      >
        {discount.approved ? "تعديل" : "موافقة"}
      </button>
    </div>
  );
};

export default SingleDiscount;
