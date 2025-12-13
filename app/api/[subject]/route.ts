import { SubjectsData, SubjectsNameEnum } from "@/src/shared/types";
import { NextRequest, NextResponse } from "next/server";
import { videosData } from '../data';

export const GET = async (request: NextRequest, context: { params: Promise<{ subject: string }> }) => {
    const { subject } = await context.params
    if (videosData[subject as SubjectsData]) {
        return NextResponse.json({
            data: {
                materia: SubjectsNameEnum[subject as SubjectsData],
                aulas: videosData[subject as SubjectsData]
            }
        }, { status: 200 })
    } else {
        return NextResponse.json({ status: 400, error: { message: "Matéria não encontrada" } }, { status: 400 })
    }
}