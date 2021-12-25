export class BookingDto {
  id: number;
  counselorId: number;
  userId: number;
  leaderId: number;
  place: string;
  district: string;
  status: string;
  priority: string;
  note: string;
  call_date: Date;
  assign_date: Date;
}
