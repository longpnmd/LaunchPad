"use client";

import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import PageHeader from "@/components/layout/PageHeader";
import CustomerTable from "./components/CustomerTable";
import { Card } from "antd";

export default function CustomersPage() {
  return [
    <PageHeader
      key="page-header"
      title="Quản lý khách hàng"
      breadcrumb={[{ title: "Trang chủ" }, { title: "Quản lý khách hàng" }]}
    />,
    <Card key="customer-table">
      <CustomerTable />
    </Card>,
  ];
}
