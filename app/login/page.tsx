import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-titile";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <PageContainer>
      <p className="p-10">
        <PageTitle title="Login to register" />
      </p>
      <div className="flex flex-col gap-4 mb-4 max-w-sm mx-auto">
        <Button>
          <Github />
          sign in with Github
        </Button>
        <Button>
          <Mail />
          sign in with Google
        </Button>
      </div>
    </PageContainer>
  );
}
