export class ProfileService {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    //GET PROFILE
    getProfileByUserId = async (userId) => {
        return this.profileRepository.findByUserId(userId);
    };
    // CREATE PROFILE
    createProfile = async (data) => {
        return this.profileRepository.create(data);
    };
    //UPDATE PROFILE
    updateProfile = async (userId, data) => {
        return this.profileRepository.updateByUserId(userId, data);
    };
    //DELETE DATA
    deletedProfile = async (userId) => {
        return this.profileRepository.deleteByUserId(userId);
    };
}
//# sourceMappingURL=profile.service.js.map