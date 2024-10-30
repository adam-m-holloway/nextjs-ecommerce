import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/auth/back-button";
import { Socials } from "@/components/auth/socials";

interface CardWrapperProps {
  children: React.ReactNode,
  cardTitle: string,
  backButtonHref: string,
  backButtonLabel: string,
  showSocials?: boolean
}

export const AuthCard = ({
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials
}: CardWrapperProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{cardTitle}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocials && (
      <CardFooter>
        <Socials />
      </CardFooter>
    )}
    <CardFooter>
      <BackButton href={backButtonHref} label={backButtonLabel} />
    </CardFooter>
  </Card>
)
