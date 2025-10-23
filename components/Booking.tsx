"use client";

import { Calendar, Gift, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", notes: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Có lỗi xảy ra khi gửi thông tin");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Có lỗi xảy ra khi gửi thông tin");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="booking"
      className="pt-0 pb-12 sm:pb-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/Background1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Đặt lịch ngay - Nhận ưu đãi đặc biệt
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Đăng ký ngay để nhận tư vấn miễn phí và ưu đãi hấp dẫn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Booking Form */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Đặt lịch tư vấn miễn phí
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Điền thông tin để nhận tư vấn từ chuyên gia
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border bg-[#fce7f4] text-[black] border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border bg-[#fce7f4] text-[black] border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#fce7f4] border text-[black] border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghi chú
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 bg-[#fce7f4] text-[black] py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Mô tả tình trạng da hoặc yêu cầu đặc biệt..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm sm:text-base">
                  ✅ Thông tin đã được gửi thành công! Chúng tôi sẽ liên hệ lại
                  với bạn sớm nhất.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm sm:text-base">
                  ❌ {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 sm:py-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Đang gửi..."
                  : "Đặt lịch ngay - Miễn phí tư vấn"}
              </button>
            </form>
          </div>

          {/* Gift Section */}
          <div className="space-y-8">
            {/* Gift Image */}
            <div className="relative">
              <div className="relative h-auto w-auto rounded-none sm:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Đăng ký nhận quà.png"
                  alt="Đăng ký nhận quà"
                  width={200}
                  height={100}
                  className="object-containt w-[400] h-auto animate-pulse hover:animate-none transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Floating gift icon with auto animation */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 shadow-lg animate-bounce">
                <Gift className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Liên hệ trực tiếp
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hotline</p>
                    <p className="text-gray-600">0889 866 666</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@facewashfox.com</p>
                  </div>
                </div>  
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Gift className="w-8 h-8" />
                <h3 className="text-xl font-bold">Ưu đãi đặc biệt</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Tư vấn miễn phí 100%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Ưu đãi lên đến 35% cho lần đầu trải nghiệm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Đăng ký thẻ thành viên Foxie để nhận nhiều quà tặng, ưu đãi hấp dẫn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
