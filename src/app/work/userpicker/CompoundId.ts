export class CompoundId {

  private SEPARATOR: string = '@';
  private compoundId: string;
  private ids: Array<string>;

  constructor(id: string | Array<string>) {
    try {
      CompoundId.validateId(id);
    } catch (error) {
      throw Error(error);
    }

    if (typeof id === 'string') {
      debugger
      this.compoundId = id;
      this.ids = this.splitCompoundId();
    }

    if (typeof id === 'object') {
      debugger
      this.compoundId = this.createCompoundId(id);
      this.ids = id;
    }
  }

  private static validateId(id: string | Array<string>) {
    if (id === '') {
      throw Error('Id cannot be an empty string');
    }

    if (id === null) {
      throw Error('Id cannot be null');
    }

    if (typeof id === 'object' && id.length === 0) {
      throw Error('Id cannot be an empty array');
    }
  }

  getCompoundId() {
    return this.compoundId;
  }

  idAt(index: number): string {
    return this.ids[index];
  }

  private splitCompoundId(): Array<string> {
    const separator: string = this.getLongestSeparator(this.compoundId);

    return this.compoundId.split(separator);
  }

  private createCompoundId(ids: Array<string>): string {
    let separator: string;
    let separatorLength: number = 0;

    for (let id of ids) {
      const getSeparatorLengthResult = this.getSeparatorLength(id);

      separatorLength = getSeparatorLengthResult >= separatorLength ? getSeparatorLengthResult : separatorLength;
    }

    separator = this.SEPARATOR.repeat(separatorLength + 1);

    return ids.join(separator);
  }


  private getLongestSeparator(value: string): string {
    const separatorLength = this.getSeparatorLength(value);

    return this.SEPARATOR.repeat(separatorLength);
  }

  private getSeparatorLength(value: string): number {
    let longest: number = 0;
    let current: number = 0;

    for (let letter of value) {
      if (this.SEPARATOR === letter) {
        current++;
      } else {
        current = 0;
      }

      longest = Math.max(current, longest);
    }
    return longest;
  }
}
