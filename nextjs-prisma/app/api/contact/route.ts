import {
  MailSender,
  MailValidator,
} from "@/app/src/backend/domain/services/MailBusinessRules";
import { MailingInfrastructure } from "@/app/src/backend/infrastructure/Mailing";
import { NextRequest, NextResponse } from "next/server";

const infra = new MailingInfrastructure();
const useCase = new MailSender(infra);
const validator = new MailValidator();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, message } = body;

    const isValid = await validator.validate(email, message);
    await useCase.send(isValid.getData().email, isValid.getData().message);
    return NextResponse.json({ message: "email envoyé" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 400 },
    );
  }
}
