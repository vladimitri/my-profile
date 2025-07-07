import { inject, InjectionToken, makeStateKey, PLATFORM_ID, Provider, StateKey, TransferState } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

export type languages = 'en' | 'ro';

export type Translated = {
  [K in languages]: string
}
export type TranslatedString = string | Translated;

type NavigationItem = {
  label: TranslatedString;
  route: string;
}

export type TechItem = {
  label: TranslatedString;
  icon: string;
  description: TranslatedString;
}

export type ExperienceItem = {
  employer: {
    name: TranslatedString,
    logo?: string,
    period: TranslatedString,
    position: TranslatedString
  }
  description: TranslatedString,
  techStack: TechItem[];
}

export type Navigation = {
  routes: NavigationItem[];
}

export type Profile = {
  fullName: string;
  position: TranslatedString;
  avatarUrl: string;
}

export type Experience = ExperienceItem[];

export type Config = {
  background: string;
}

export type DataPayload = {
  config: Config,
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



export const runOnClient = new InjectionToken<(callback: () => void) => void>('run code on client', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    return (callback: () => void) => {
      if(isPlatformBrowser(platformId)) {
        callback()
      }
    }
  }
});

export const runOnServer = new InjectionToken<(callback: () => void) => void>('run code on server', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    return (callback: () => void) => {
      if(isPlatformServer(platformId)) {
        callback()
      }
    }
  }
});

export const configData = new InjectionToken<Config>('configData');
export const profileData = new InjectionToken<Profile>('profileData');
export const navigationData = new InjectionToken<Navigation>('navigationData');
export const experienceData = new InjectionToken<Experience>('experienceData');


export const configTransferKey = makeStateKey<Config>('config');
export const profileTransferKey = makeStateKey<Profile>('profile');
export const navigationTransferKey = makeStateKey<Navigation>('navigation');
export const experienceTransferKey = makeStateKey<Experience>('experience');

export const provideConfigTransferState = () => {
  return provideTransferState<Config>(configTransferKey, configData);
}

export const provideProfileTransferState = () => {
  return provideTransferState<Profile>(profileTransferKey, profileData);
}

export const provideNavigationTransferState = () => {
  return provideTransferState<Navigation>(navigationTransferKey, navigationData);
}


export const provideExperineceTransferState = () => {
  return provideTransferState<Experience>(experienceTransferKey, experienceData);
}

