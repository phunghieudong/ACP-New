//@ts-nocheck
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";

export type ProfileParamList = {
  // nơi khai báo screen và params
  Menu: undefined;
  PatientProfile: undefined;
  EditPatientProfile: undefined;
  ServiceAccount: undefined;
  PrivacyPolicy: undefined;
  Present: undefined;
  Demo: undefined;
  Surgery: undefined;
  AdviseMenu: undefined;
  UserManual: undefined;
  TermOfUse: undefined;
  TermOfMedical: undefined;
  RegularProblems: undefined;
  RegularProblemsDetail: undefined;
  PrivacyPolicyDetail: undefined;
  TermOfMedicalDetail: undefined;
  Introduct: undefined;
  MedicalStory: {
    refetchMRD?: number;
    refetchSMRD?: number;
    id?: number;
    surgeryPart?: string;
    surgeryYear?: string;
    surgeryPlace?: string;
    surgeryResult?: string;
    sympToms?: string;
  };
  MedicalStoryNew: {
    refetchMRD?: number;
    refetchSMRD?: number;
    id?: number;
    surgeryPart?: string;
    surgeryYear?: string;
    surgeryPlace?: string;
    surgeryResult?: string;
    sympToms?: string;
  };
  ProfileMenu: {
    refetchMRD?: number;
    refetchSMRD?: number;
    id?: number;
    surgeryPart?: string;
    surgeryYear?: string;
    surgeryPlace?: string;
    surgeryResult?: string;
    sympToms?: string;
  };
  AddMedicalStory: { refetch: number };
  AddSurgeryMedicalStory: {
    type: number;
    refetch: number;
    id?: number;
    surgeryPart?: string;
    surgeryYear?: string;
    surgeryPlace?: string;
    surgeryResult?: string;
    sympToms?: string;
  };
  HospitalCode: undefined;
  Folder: undefined;
  ImageList: { folderId: number };
  TestResult: undefined;
  Vaccination: undefined;
  Prescription: undefined;
  Pregnancy: undefined;
  Allergy: {
    refetch?: number;
    allergyTypeName?: string;
    allergyTypeId?: number;
    id?: number;
    description?: string;
    fromDate?: Date;
    toDate?: Date;
  };
  AddAllergy: {
    fromDate?: Date;
    toDate?: Date;
    refetch: number;
    status: number;
    allergyTypeName?: string;
    allergyTypeId?: number;
    id?: number;
    description?: string;
  };
  MedicalHistory: undefined;
  MedicalHistoryDetail: undefined;
  News: undefined;
  BiddingSession: undefined;
  BiddingTicket: undefined;
  Policy: undefined;
  NewsDetail: {
    title: string;
    content: string;
    backgroundImage: string | null;
    bannerImage: string | null;
    CreatedBy: Date;
    Created: string;
  };
  DiagnoticType: { hospitalId: number };
};

// ++ BiddingSessionProps
type BiddingSessionNavigationProp = StackNavigationProp<
  ProfileParamList,
  "BiddingSession"
>;
type BiddingSessionRouteProp = RouteProp<ProfileParamList, "BiddingSession">;
export type BiddingSessionProps = {
  navigation: BiddingSessioncreenNavigationProp;
  route: BiddingSessionScreenRouteProp;
};

// ++ BiddingTicketProps
type BiddingTicketNavigationProp = StackNavigationProp<
  ProfileParamList,
  "BiddingTicket"
>;
type BiddingTicketRouteProp = RouteProp<ProfileParamList, "BiddingTicket">;
export type BiddingTicketProps = {
  navigation: BiddingTicketcreenNavigationProp;
  route: BiddingTicketScreenRouteProp;
};
