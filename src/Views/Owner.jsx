export default function Owner() {
  return (
    <div className="min-h-dvh flex flex-col items-center bg-gray-100">
      <h1>15_Kamolthep(Mik/มิก)</h1>
      <img src="dark-wolf.png" alt="img-profile" width={200} className="m-5" />
      <h2 className="m-5 font-bold">Short Biography:</h2>
      <p className="max-w-2xl text-center">
        สวัสดีครับ ชื่อ มิก ครับ ปัจจุบันกำลังเรียน Full Stack Bootcamp กับ{" "}
        <b className="text-amber-500">Generation thailand</b>{" "}
        อาจจะยังไม่เก่งครับ แต่พยายามเรียนอยู่ครับ
        คิดว่าถ้าหากใช้เวลาอยู่กับมัน(โค้ด)ให้มากขึ้น ก็จะคุ้นเคยมากกว่านี้
        ใช้เก่งกว่านี้ ยังไงก็จะตั้งใจแลัพยายามมากกว่านี้ครับ
      </p>
    </div>
  );
}
