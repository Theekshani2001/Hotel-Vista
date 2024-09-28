package com.tharindi.Hotel_Vista.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
@Entity
public class Payroll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;

    private Double basicSalary;
    private Double allowance;
    private Double deduction;
    private Double netPay;
    private LocalDate paymentDate;
    private String employeeName;

    public Payroll() {
    }

    public Payroll(Long id, Double basicSalary, Double allowance, Double deduction, Double netPay, LocalDate paymentDate, String employeeName) {
        this.id = id;
        this.basicSalary = basicSalary;
        this.allowance = allowance;
        this.deduction = deduction;
        this.netPay = netPay;
        this.paymentDate = paymentDate;
        this.employeeName = employeeName;
    }

    public Payroll(Double basicSalary, Double allowance, Double deduction, Double netPay, LocalDate paymentDate, String employeeName) {
        this.basicSalary = basicSalary;
        this.allowance = allowance;
        this.deduction = deduction;
        this.netPay = netPay;
        this.paymentDate = paymentDate;
        this.employeeName = employeeName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getBasicSalary() {
        return basicSalary;
    }

    public void setBasicSalary(Double basicSalary) {
        this.basicSalary = basicSalary;
    }

    public Double getAllowance() {
        return allowance;
    }

    public void setAllowance(Double allowance) {
        this.allowance = allowance;
    }

    public Double getDeduction() {
        return deduction;
    }

    public void setDeduction(Double deduction) {
        this.deduction = deduction;
    }

    public Double getNetPay() {
        return netPay;
    }

    public void setNetPay(Double netPay) {
        this.netPay = netPay;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    @Override
    public String toString() {
        return "Payroll{" +
                "id=" + id +
                ", basicSalary=" + basicSalary +
                ", allowance=" + allowance +
                ", deduction=" + deduction +
                ", netPay=" + netPay +
                ", paymentDate=" + paymentDate +
                ", employeeName='" + employeeName + '\'' +
                '}';
    }
}
