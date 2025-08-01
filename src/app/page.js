import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hey, Time to Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
}
