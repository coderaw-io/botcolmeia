"use client"

import { UploadedFileResult } from "@/@types/upload/upload"
import { Skeleton } from "@/components/ui/skeleton"
import { UploadService } from "@/services/upload-service"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface UploadFileSkeletonProps {
  fileId: string
  fileName: string
  page: number
  pageSize: number
}

export function UploadFileSkeleton({ 
  fileId,
  fileName,
  page,
  pageSize
}: UploadFileSkeletonProps) {
  const queryClient = useQueryClient()

  const { data: fileStatusData } = useQuery<UploadedFileResult | undefined>({
    queryKey: ["get-file-status", fileId],
    queryFn: async () => {
      const response = await UploadService.getUploadedFileById(fileId)
      return response[0]
    },
    enabled: !!fileId,
    refetchInterval: 3000,
  })

  if (fileStatusData && fileStatusData.fileStatus === "Concluded") {
    toast.info("UPLOAD DO SEU ARQUIVO CONCLUÍDO", {
      description: `Você importou o arquivo ${fileName} com êxito.`
    })

    queryClient.invalidateQueries({
      queryKey: ["get-all-uploaded-files", page, pageSize],
      exact: true,
      refetchType: "all",
    })
  }

  return (
    <>
      <td className="p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="size-8 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-[250px]" />
            <Skeleton className="h-3 w-[200px]" />
          </div>
        </div>
      </td>

      <td className="p-4">
        <Skeleton className="h-3 w-[200px]" />
      </td>

      <td className="p-4 text-center">
        <Skeleton className="h-3 w-[200px]" />
      </td>

      <td className="p-4 text-center">
        <Skeleton className="h-3 w-[200px]" />
      </td>

      <td className="p-4 text-center">
        <Skeleton className="h-3 w-[200px]" />
      </td>

      <td className="p-4">
        <Skeleton className="h-3 w-[200px]" />
      </td>
    </>
  )
}

