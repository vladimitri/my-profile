import { inject, InjectionToken, makeStateKey, Provider, StateKey, TransferState } from "@angular/core";


type NavigationItem = {
  label: string;
  route: string;
}

type TechItem = {
  label: string;
  icon: string;
}

type ExperienceItem = {
  key: string;
  employerName: string;
  position: string;
  duration: string;
  interval: string;
  techStack: TechItem[];
}

export type Navigation = {
  routes: NavigationItem[];
}

export type Profile = {
  fullName: string;
  position: string;
  avatarUrl: string;
}

export type Experience = ExperienceItem[];

export type DataPayload = {
  navigation: Navigation,
  profile: Profile,
  experience?: Experience,
};

const provideTransferState = <T>(key: StateKey<T>, provider: InjectionToken<T>): Provider => {
  return {
    provide: provider,
    useFactory: () => {
      const transferState = inject(TransferState);
      if (transferState.hasKey(key)) {
        return transferState.get<T>(key, {} as T);
      } else {
        const initialValue = {} as T;
        transferState.set(key, initialValue);
        return initialValue;
      }
    }
  };
}

export const initialPayloadData = new InjectionToken<DataPayload>('initialPayloadData');

export const profileTransferKey = makeStateKey<Profile>('profile');
export const navigationTransferKey = makeStateKey<Navigation>('navigation');

export const profileData = new InjectionToken<Profile>('profileData');
export const navigationData = new InjectionToken<Navigation>('navigationData');

export const provideProfileTransferState = () => {
  return provideTransferState<Profile>(profileTransferKey, profileData);
}

export const provideNavigationTransferState = () => {
  return provideTransferState<Navigation>(navigationTransferKey, navigationData);
}
