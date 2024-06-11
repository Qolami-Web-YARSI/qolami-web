const UbahFotoProfil = ({ handleFiles, klikHapusFoto }) => {
  return (
    <>
      <div
        className="modal fade tw-p-4"
        id="ubahFotoProfilModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog tw-w-[100%] sm:tw-w-[50%] modal-dialog-centered modal-lg tw-font-poppins">
          <div className="modal-content">
            <div className="modal-body tw-rounded-[15px] tw-bg-[#FFF6D9] tw-p-0">
              <div className="tw-flex tw-flex-col">
                <div className="tw-flex tw-flex-col tw-size-full tw-m-auto">
                  <p className="tw-text-[25px] tw-py-10 tw-m-auto">
                    Ubah Foto Profil
                  </p>
                </div>
                <hr className="tw-border-[1px] tw-border-[#000000]"></hr>
                <button
                  className="tw-flex tw-flex-col tw-size-full tw-m-auto"
                  onClick={handleFiles}
                  data-bs-dismiss="modal"
                >
                  <p className="tw-text-[20px] tw-text-[#0095F6] tw-py-5 tw-m-auto">
                    Unggah Foto
                  </p>
                </button>
                <hr className="tw-border-[1px] tw-border-[#000000]"></hr>
                <button
                  className="tw-flex tw-flex-col tw-size-full tw-m-auto"
                  onClick={klikHapusFoto}
                  data-bs-dismiss="modal"
                >
                  <p className="tw-text-[20px] tw-text-[#ED4956] tw-py-5 tw-m-auto">
                    Hapus Foto
                  </p>
                </button>
                <hr className="tw-border-[1px] tw-border-[#000000]"></hr>
                <button
                  className="tw-flex tw-flex-col tw-size-full tw-m-auto"
                  data-bs-dismiss="modal"
                >
                  <p className="tw-text-[20px] tw-py-5 tw-m-auto">Batal</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UbahFotoProfil;
