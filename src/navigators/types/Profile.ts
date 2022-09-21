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

// nơi khai báo props
// ++ profile
type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Menu"
>;
type ProfileScreenRouteProp = RouteProp<ProfileParamList, "Menu">;
export type ProfileProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

// ++ patient profile
type PatientProfileScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "PatientProfile"
>;
type PatientProfileScreenRouteProp = RouteProp<
  ProfileParamList,
  "PatientProfile"
>;
export type PatientProfileProps = {
  navigation: PatientProfileScreenNavigationProp;
  route: PatientProfileScreenRouteProp;
};

// ++ edit patient profile
type EditPatientProfileScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "EditPatientProfile"
>;
type EditPatientProfileScreenRouteProp = RouteProp<
  ProfileParamList,
  "EditPatientProfile"
>;
export type EditPatientProfileProps = {
  navigation: EditPatientProfileScreenNavigationProp;
  route: EditPatientProfileScreenRouteProp;
};

// ++ medical story
type ProfileMenuScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "ProfileMenu"
>;
type ProfileMenuScreenRouteProp = RouteProp<ProfileParamList, "ProfileMenu">;
export type ProfileMenuProps = {
  navigation: ProfileMenuScreenNavigationProp;
  route: ProfileMenuScreenRouteProp;
};

// ++ medical story
type MedicalStoryScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "MedicalStory"
>;
type MedicalStoryScreenRouteProp = RouteProp<ProfileParamList, "MedicalStory">;
export type MedicalStoryProps = {
  navigation: MedicalStoryScreenNavigationProp;
  route: MedicalStoryScreenRouteProp;
};

// ++ medical story
type MedicalStoryNewScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "MedicalStory"
>;
type MedicalStoryNewScreenRouteProp = RouteProp<
  ProfileParamList,
  "MedicalStoryNew"
>;
export type MedicalStoryNewProps = {
  navigation: MedicalStoryNewScreenNavigationProp;
  route: MedicalStoryNewScreenRouteProp;
};
// ++ add medical story
type AddMedicalStoryScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "AddMedicalStory"
>;
type AddMedicalStoryScreenRouteProp = RouteProp<
  ProfileParamList,
  "AddMedicalStory"
>;
export type AddMedicalStoryProps = {
  navigation: AddMedicalStoryScreenNavigationProp;
  route: AddMedicalStoryScreenRouteProp;
};

// ++ add surgery medical story
type AddSurgeryMedicalStoryScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "AddSurgeryMedicalStory"
>;
type AddSurgeryMedicalStoryScreenRouteProp = RouteProp<
  ProfileParamList,
  "AddSurgeryMedicalStory"
>;
export type AddSurgeryMedicalStoryProps = {
  navigation: AddSurgeryMedicalStoryScreenNavigationProp;
  route: AddSurgeryMedicalStoryScreenRouteProp;
};

// ++ hospital code
type HospitalCodeScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "HospitalCode"
>;
type HospitalCodeScreenRouteProp = RouteProp<ProfileParamList, "HospitalCode">;
export type HospitalCodeProps = {
  navigation: HospitalCodeScreenNavigationProp;
  route: HospitalCodeScreenRouteProp;
};

// ++ folder
type FolderScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Folder"
>;
type FolderScreenRouteProp = RouteProp<ProfileParamList, "Folder">;
export type FolderProps = {
  navigation: FolderScreenNavigationProp;
  route: FolderScreenRouteProp;
};

// ++ image list
type ImageListScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "ImageList"
>;
type ImageListScreenRouteProp = RouteProp<ProfileParamList, "ImageList">;
export type ImageListProps = {
  navigation: ImageListScreenNavigationProp;
  route: ImageListScreenRouteProp;
};

// ++ test result
type TestResultScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "TestResult"
>;
type TestResultScreenRouteProp = RouteProp<ProfileParamList, "TestResult">;
export type TestResultProps = {
  navigation: TestResultScreenNavigationProp;
  route: TestResultScreenRouteProp;
};

// ++ vaccination
type VaccinationScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Vaccination"
>;
type VaccinationScreenRouteProp = RouteProp<ProfileParamList, "Vaccination">;
export type VaccinationProps = {
  navigation: VaccinationScreenNavigationProp;
  route: VaccinationScreenRouteProp;
};

// ++ prescription
type PrescriptionScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Prescription"
>;
type PrescriptionScreenRouteProp = RouteProp<ProfileParamList, "Prescription">;
export type PrescriptionProps = {
  navigation: PrescriptionScreenNavigationProp;
  route: PrescriptionScreenRouteProp;
};

// ++ pregnancy
type PregnancyScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Pregnancy"
>;
type PregnancyScreenRouteProp = RouteProp<ProfileParamList, "Pregnancy">;
export type PregnancyProps = {
  navigation: PregnancyScreenNavigationProp;
  route: PregnancyScreenRouteProp;
};

// ++ allergy
type AllergyScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Allergy"
>;
type AllergyScreenRouteProp = RouteProp<ProfileParamList, "Allergy">;
export type AllergyProps = {
  navigation: AllergyScreenNavigationProp;
  route: AllergyScreenRouteProp;
};

// ++ add allergy
type AddAllergyScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "AddAllergy"
>;
type AddAllergyScreenRouteProp = RouteProp<ProfileParamList, "AddAllergy">;
export type AddAllergyProps = {
  navigation: AddAllergyScreenNavigationProp;
  route: AddAllergyScreenRouteProp;
};

// ++ medical history
type MedicalHistoryScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "MedicalHistory"
>;
type MedicalHistoryScreenRouteProp = RouteProp<
  ProfileParamList,
  "MedicalHistory"
>;
export type MedicalHistoryProps = {
  navigation: MedicalHistoryScreenNavigationProp;
  route: MedicalHistoryScreenRouteProp;
};

// ++ medical history detail
type MedicalHistoryDetailScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "MedicalHistoryDetail"
>;
type MedicalHistoryDetailScreenRouteProp = RouteProp<
  ProfileParamList,
  "MedicalHistoryDetail"
>;
export type MedicalHistoryDetailProps = {
  navigation: MedicalHistoryDetailScreenNavigationProp;
  route: MedicalHistoryDetailScreenRouteProp;
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

// ++ Polycy
type PolycyScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "Policy"
>;
type PolycyScreenRouteProp = RouteProp<ProfileParamList, "Policy">;
export type PolycyProps = {
  navigation: PolycyScreenNavigationProp;
  route: PolycyScreenRouteProp;
};

// ++ news detail
type NewsDetailScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "NewsDetail"
>;
type NewsDetailScreenRouteProp = RouteProp<ProfileParamList, "NewsDetail">;
export type NewsDetailProps = {
  navigation: NewsDetailScreenNavigationProp;
  route: NewsDetailScreenRouteProp;
};

// ++ diagnotic type
type DiagnoticTypeScreenNavigationProp = StackNavigationProp<
  ProfileParamList,
  "DiagnoticType"
>;
type DiagnoticTypeScreenRouteProp = RouteProp<
  ProfileParamList,
  "DiagnoticType"
>;
export type DiagnoticTypeProps = {
  navigation: DiagnoticTypeScreenNavigationProp;
  route: DiagnoticTypeScreenRouteProp;
};
